import { Response } from "express-serve-static-core";
import client from "../db/db";

export async function handleAddPomodoro(res: Response<any, number>, login: string) {
  const sql = "INSERT INTO pomodoros (userid, date) VALUES ($1, $2)";

  const values = [login, new Date()];
  try {
    await client.query(sql, values);
    res.json();
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(400).json(err.stack);
  }
}

export async function handleGetTodaysPomodoros(res: any, login: string) {
  const sql = `SELECT COUNT(*) FROM pomodoros WHERE DATE(date) = CURRENT_DATE AND userid = ($1)`;

  try {
    const dbResponse = await client.query(sql, [login]);
    res.json({ result: dbResponse.rows[0].count });
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(400).json(err.stack);
  }
}

export async function handleGetAllPomodoros(res: any, login: string) {
  const sql = `SELECT COUNT (*) FROM pomodoros WHERE userid = ($1)`;

  try {
    const dbResponse = await client.query(sql, [login]);
    res.json({ result: dbResponse.rows[0].count });
  } catch (err) {
    console.log("handleGetAllPomodoros " + err.stack);
    res.sendStatus(400).json(err.stack);
  }
}
