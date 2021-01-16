import client from "./client";

client.query(`CREATE TABLE IF NOT EXISTS pomodoros (userID text, date date)`, (err: Error) => {
  if (err) {
    console.log(`error with db: ${err.message}`);
  } else {
    console.log("table created");
  }
});

client.query(
  `CREATE TABLE IF NOT EXISTS users(
          userID text UNIQUE,
          dateCreated date,
          login text,
          email text UNIQUE,
          password text
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
