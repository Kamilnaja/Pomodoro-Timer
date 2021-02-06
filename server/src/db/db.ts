import client from './client';

type TableQuery = {
  query: string;
  tableName: string;
};

const createTableSql = 'CREATE TABLE IF NOT EXISTS';

const queries: TableQuery[] = [
  {
    query: `${createTableSql} pomodoros (
    userID text,
    date   date)`,
    tableName: 'pomodoros',
  },
  {
    query: `${createTableSql} users (
        id           SERIAL PRIMARY KEY,
        dateCreated  date,
        login        text UNIQUE,
        email        text UNIQUE,
        password     text NOT NULL
      )`,
    tableName: 'users',
  },
  {
    query: `${createTableSql} todos (
      id           SERIAL PRIMARY KEY,
      dateCreated  date,
      userID       text,
      title        text,
      note         text,
      isDone       boolean
    )`,
    tableName: 'todos',
  },
];

queries.forEach((tableQuery: TableQuery) => {
  client.query(tableQuery.query, (err: Error) => {
    if (err) {
      console.log(`error while creating db: ${err.message}`);
    } else {
      console.log(`table created: ${tableQuery.tableName}`);
    }
  });
});

export default client;
