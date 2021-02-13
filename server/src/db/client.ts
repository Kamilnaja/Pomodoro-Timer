import { Client } from 'pg';

const client: Client = new Client({
  port: 5432,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_DATABASE,
});

client.connect((err: Error) => {
  if (err) {
    console.error(`connection error ${err.stack}`);
  } else {
    console.log('connected!');
  }
});

export default client;
