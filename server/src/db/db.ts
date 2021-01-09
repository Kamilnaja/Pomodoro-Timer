import sqlite3 from 'sqlite3';

const DBSOURCE = 'pomodoros1.sqlite';

const db = new sqlite3.Database(DBSOURCE, err => {
  if (err) {
    console.error('error with db: ' + err.message);
    throw err;
  } else {
    createPomodorosTable();
    createUsersTable();
  }
});

function createPomodorosTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS pomodoros (
          userID text,
          date date
          )`,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log('pomodoros table created or updated');
      }
    }
  );
}

function createUsersTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS users(
      userID text UNIQUE, 
      dateCreated date, 
      login string, 
      email string UNIQUE,
      password string
    )`,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log('users table created or updated');
      }
    }
  );
}

export default db;
