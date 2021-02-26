import client from './client';
import { TableQuery } from '../models/db/TableQuery';
const createTableSql = 'CREATE TABLE IF NOT EXISTS';

const queries: TableQuery[] = [
  {
    query: `pomodoros (
      user_id text,
      date    timestamp with time zone
    )`,
    tableName: 'pomodoros',
  },
  {
    query: `users (
        id            SERIAL PRIMARY KEY,
        date_created  date,
        login         text UNIQUE,
        email         text UNIQUE,
        password      text NOT NULL
      )`,
    tableName: 'users',
  },
  {
    query: `todos (
      id            SERIAL PRIMARY KEY,
      date_created  timestamp,
      user_id       text,
      title         text,
      note          text,
      is_done       boolean
    )`,
    tableName: 'todos',
  },
  {
    query: `subtasks (
      id             SERIAL PRIMARY KEY,
      date_created   timestamp,
      parent_task_id integer,
      title          text,
      note           text,
      is_done        boolean
    )`,
    tableName: 'subtasks',
  },
  {
    query: `settings (
      id                         SERIAL PRIMARY KEY,
      user_id                    text,
      is_cookie_consent_accepted boolean DEFAULT false,
      is_sound_enabled           boolean DEFAULT true
    )`,
    tableName: 'settings',
  },
];

queries.forEach((tableQuery: TableQuery) => {
  client.query(`${createTableSql} ${tableQuery.query}`, (err: Error) => {
    if (err) {
      console.log(`error while creating db: ${err.message}`);
    } else {
      console.log(`table created or updated: ${tableQuery.tableName}`);
    }
  });
});

export default client;
