import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const pool: Pool = new Pool({
  port: 5432,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_DATABASE,
  ssl: true,
});

pool.connect((err: Error) => {
  if (err) {
    console.error(`connection error: ${err.stack}`);
  } else {
    console.log('connected!');
  }
});
