const userController = {};
import db from './db.js';

// GET user login details
userController.login = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  const queryString = `SELECT * FROM users \
  WHERE username = $1`;

  db.query(queryString, [username])
    .then((user) => {
      console.log(user);
      // if entry found for user, check if password matches

      // if password doesn't match, redirect to signup page
      if (user.password !== password) {
        res.redirect('/signup');

        // else (does match), pass along to setCookie function
      } else {
        // res.locals.id = user.id
        return next();
      }
    })
    .catch((err) => {
      // no user found
      return next({ error: err, message: 'No username found' });
    });
};

userController.setCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { httpOnly: true });
};

userController.signup = (req, res, next) => {
  const { username, password } = req.body;

  const newUser = `INSERT INTO users(username, password) VALUES (${username}, ${password})`;

  db.query(newUser)
    .then((response) => {
      res.locals.response = response;
      return next();
    })
    .catch((err) => {
      return next({ error: err, message: 'error creating user' });
    });
};

export default userController;
