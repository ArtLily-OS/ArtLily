const userController = {};
import query from './db.js';

// GET user login details
userController.login = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);

  const queryString = `SELECT * FROM users \
  WHERE username = $1`;

  query(queryString, [username])
    .then((result) => {
      console.log(result);
      // if entry found for user, check if password matches

      // if password doesn't match, redirect to signup page
      const returnedPassword = result.rows[0].password;
      if (returnedPassword !== password) {
        res.redirect('/signup');

        // else (does match), pass along to setCookie function
      } else {
        // res.locals.id = user.id
        return next();
      }
    })
    .catch((err) => {
      // no user found
      console.log(err);
      return next({
        status: 400,
        error: err,
        message: 'DB error: No username found',
      });
    });
};

userController.setCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { httpOnly: true });
};

userController.signup = (req, res, next) => {
  const { username, password } = req.body;

  const newUser = `INSERT INTO users(username, password) VALUES ('${username}', '${password}');`;

  query(newUser)
    .then((response) => {
      res.locals.response = response;
      return next();
    })
    .catch((err) => {
      return next({ error: err, message: 'error creating user' });
    });
};

export default userController;
