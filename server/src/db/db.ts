import sqlite3 from 'sqlite3';
const DBSOURCE = 'pomodoros1.sqlite';

const db = new sqlite3.Database(DBSOURCE, err => {
  if (err) {
    // Cannot open database
    console.error('error with db: ' + err.message);
    throw err;
  } else {
    initializeDb();
  }
});

const initializeDb = () => {
  console.log('starting');
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
};

export default db;
