import { TableQuery } from './models/TableQuery';
import { pool } from './client';
const createTableSql = 'CREATE TABLE IF NOT EXISTS';

const queries: TableQuery[] = [
  {
    query: `pomodoros (
      user_id    integer,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      tag_id     integer REFERENCES tags(id)
    )`,
    tableName: 'pomodoros',
  },
  {
    query: `users (
        id            SERIAL PRIMARY KEY,
        date_created  DATE DEFAULT CURRENT_DATE,
        login         text UNIQUE,
        email         text UNIQUE,
        password      text NOT NULL
      )`,
    tableName: 'users',
  },
  {
    query: `tags (
      id         SERIAL PRIMARY KEY,
      user_id    integer REFERENCES users(id),
      text       text NOT NULL
    )`,
    tableName: 'tags',
  },
  {
    query: `settings (
      id                         SERIAL PRIMARY KEY,
      user_id                    text,
      is_cookie_consent_accepted boolean DEFAULT false,
      is_sound_enabled           boolean DEFAULT true,
      display_direction          text DEFAULT 'ASC',
      display_empty_days         boolean DEFAULT false
    )`,
    tableName: 'settings',
  },
];

queries.forEach((tableQuery: TableQuery) => {
  pool.query(`${createTableSql} ${tableQuery.query}`, (err: Error) => {
    if (err) {
      console.log(`error while creating db: ${err.message}`);
    } else {
      console.log(`table created or updated: ${tableQuery.tableName}`);
    }
  });
});
