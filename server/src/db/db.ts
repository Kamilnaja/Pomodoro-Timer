import client from './client';

type TableQuery = {
  query: string;
  tableName: string;
};

const createTableSql = 'CREATE TABLE IF NOT EXISTS';

const queries: TableQuery[] = [
  {
    query: `${createTableSql} pomodoros (
      user_id text,
      date    date
    )`,
    tableName: 'pomodoros',
  },
  {
    query: `${createTableSql} users (
        id            SERIAL PRIMARY KEY,
        date_created  date,
        login         text UNIQUE,
        email         text UNIQUE,
        password      text NOT NULL
      )`,
    tableName: 'users',
  },
  {
    query: `${createTableSql} todos (
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
    query: `${createTableSql} subtasks (
      id             SERIAL PRIMARY KEY,
      date_created   timestamp,
      parent_task_id integer,
      title          text,
      note           text,
      is_done        boolean
    )`,
    tableName: 'subtasks',
  },
];

queries.forEach((tableQuery: TableQuery) => {
  client.query(tableQuery.query, (err: Error) => {
    if (err) {
      console.log(`error while creating db: ${err.message}`);
    } else {
      console.log(`table created: ${tableQuery.tableName} !`);
    }
  });
});

export default client;
