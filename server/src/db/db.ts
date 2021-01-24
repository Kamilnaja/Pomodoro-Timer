import client from "./client";

client.query(
  `CREATE TABLE IF NOT EXISTS pomodoros (
  userID text,
  date   date)`,
  (err: Error) => {
    if (err) {
      console.log(`error with db: ${err.message}`);
    } else {
      console.log("table created");
    }
  },
);

client.query(
  `CREATE TABLE IF NOT EXISTS users (
          id           SERIAL PRIMARY KEY,
          dateCreated  date,
          login        text,
          email        text UNIQUE,
          password     text NOT NULL
        )`,
  (err: Error) => {
    if (err) {
      console.log(`error with db: ${err.message}`);
    } else {
      console.log("users table created or updated");
    }
  },
);

export default client;
