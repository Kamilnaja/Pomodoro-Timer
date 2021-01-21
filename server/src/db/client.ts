import { Client } from "pg";

const client = new Client({
  port: 5432,
  host: process.env.DATABASE_HOST || "localhost",
  password: process.env.DATABASE_PASSWORD || "asdf",
  user: process.env.DATABASE_USER || "standarduser",
  database: process.env.DATABASE_DATABASE || "pomodoros",
});

client.connect(err => {
  if (err) {
    console.error(`connection error ${err.stack}`);
  } else {
    console.log("connected!");
  }
});

export default client;
