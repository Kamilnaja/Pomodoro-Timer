import { Client } from "pg";

console.log(process.env.DATABASE_PASSWORD + " " + process.env.DATABASE_URL);

const client = new Client({
  port: 5432,
  host: process.env.DATABASE_HOST || "localhost",
  password: process.env.DATABASE_PASSWORD || "jebaniec12$",
  user: process.env.DATABASE_USER || "kamil",
  database: process.env.DATABASE_DATABASE || "pomodoros",
});

client.connect();

export default client;
