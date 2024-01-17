import express from 'express';
import cors from 'cors';
import path from 'path';
import userController from './userController.js';

// needed bc you can't use __dirname with ES Modules import syntax
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// config
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// POST request to sign up a new user
app.post(
  '/signup',
  userController.signup,
  // userController.setCookie,
  (req, res) => {
    res.status(200).redirect('/home');
  }
);

// GET request to serve up home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

// GET request to serve up login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

// POST request to log in a known user
app.post('/', userController.login, (req, res) => {
  res.status(200).send('Login successful');
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

// Server listener
app.listen(3000, () => {
  console.log('App listening on port 3000...');
});
