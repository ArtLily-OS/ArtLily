const request = require('supertest');
// const db = require('../backend/db');
// // import request from 'supertest';
// // import query from '../backend/db';

const server = 'http://localhost:3000';

// import pkg from 'pg';
// const { Pool } = pkg;
const { Pool } = require('pg');

const PG_URI =
  'postgres://emozkqfo:h6pvxtcV0vBospTQR97Lgdk8Q5wxejG5@batyr.db.elephantsql.com/emozkqfo';

const pool = new Pool({
  connectionString: PG_URI,
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error with database connection:', err.message);
});

// export default function query(text, params, callback) {
//   console.log('executed query', text);
//   return pool.query(text, params, callback);
// }
function query(text, params, callback) {
  console.log('executed query', text);
  return pool.query(text, params, callback);
}

describe('testing routes', function () {
  test('post: login', async function () {
    const response = await request(server)
      .post('/')
      .send({ username: 'test', password: 'test' });
    expect(response.status).toBe(200);
  });

  test('get: login', async function () {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Content-type', /text\/html/);
  });

  test('post: signup', async function () {
    let testUserExists;
    await query("SELECT * FROM users WHERE username = 'newTest'")
      .then((result) => {
        testUserExists = true;
        console.log('testUserExists: ', testUserExists);
      })
      .catch((err) => {
        console.log(err);
        testUserExists = false;
        console.log('testUserExists: ', testUserExists);
      });

    const user = "DELETE FROM users WHERE username = 'newTest'";
    if (testUserExists) {
      await query(user)
        .then(() => {
          console.log('deleted newTest user');
        })
        .catch(() => {
          console.log('error occurred deleting newTest user');
        });
    }
    const response = await request(server)
      .post('/signup')
      .send({ username: 'newTest', password: 'newPass' });
    expect(response.status).toBe(200);
  });
});
