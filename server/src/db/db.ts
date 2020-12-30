import sqlite3 from 'sqlite3';
import fs from 'fs';
import * as path from 'path';

const DBSOURCE = 'pomodoros1.sqlite';

const db = new sqlite3.Database(DBSOURCE, err => {
  if (err) {
    console.error('error with db: ' + err.message);
    throw err;
  } else {
    initializeDb();
    createUsersTable();
  }
});

const initializeDb = () => {
  console.log('starting');
  createPomodorosTable();
};

function createPomodorosTable() {
  try {
    // todo - read from db
    // let queries = fs.readFileSync(path.join(__dirname, './queries/create_db.sql'));
  } catch (err) {
    console.log;
  }
  db.run(
    `CREATE TABLE IF NOT EXISTS pomodoros (
          userID text,
          date date
          )`,
    err => {
      if (err) {
        console.log(err);
        // Table already created
      } else {
        console.log('table is working');
      }
    }
  );
}

function createUsersTable() {
  db.run(`CREATE TABLE IF NOT EXISTS users(userID text, dateCreated date, name string)`, err => {
    if (err) {
      console.log('error');
    } else {
      console.log('user table created');
    }
  });
}

export default db;
