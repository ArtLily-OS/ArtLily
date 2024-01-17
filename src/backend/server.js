import express from 'express';
import path from 'path';
import loginController from './loginController.js';

// needed bc you can't use __dirname with ES Modules import syntax
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// app.get('/login', loginController.login, (req, res) => {});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.post('/', loginController.login, (req, res) => {
  res.status(200).send('');
});

app.listen(3000, () => {
  console.log('App listening on port 3000...');
});
