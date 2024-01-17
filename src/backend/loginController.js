const loginController = {};
import db from './db.js';

// GET user login details
loginController.login = (req, res, next) => {
  const { username, password } = req.body;

  const queryString = `SELECT * FROM users \
  WHERE username=${username} \
  AND password=${password}`;

  try {
    db.query(queryString);
  } catch (err) {}
};

export default loginController;
