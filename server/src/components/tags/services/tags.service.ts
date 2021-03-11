import { QueryConfig } from 'pg';
import { Tag } from '../../../../../types/tagsInterfaces';
import { pool } from '../../../db/client';

export const getTagsFromDb = async (id: string) => {
  const query: QueryConfig = {
    text: `
    SELECT tags.id, text 
    FROM tags
    INNER JOIN users ON tags.user_id = users.id
    WHERE user_id = ($1)
    `,
    values: [id],
  };
  try {
    return await pool.query(query);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const insertTagToDb = async (id: string, tag: Tag) => {
  const query: QueryConfig = {
    text: `
    INSERT INTO tags (user_id, text) 
    VALUES ($1)
    WHERE user_id = ($2)
    `,
    values: [tag, id],
  };

  try {
    return await pool.query(query);
  } catch (e) {
    return Promise.reject(e);
  }
};
