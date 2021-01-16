import { Response } from "express-serve-static-core";
import client from "../db/db";

export async function handleAddPomodoro(res: Response<any, number>) {
  const sql = "INSERT INTO pomodoros (userID, date) VALUES ($1,$2)";
  // todo - get user
  const values = ["kamil naja", new Date()];
  try {
    await client.query(sql, values);
    res.json();
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(400).json(err.stack);
  }
}

export async function handleGetTodaysPomodoros(res: any) {
  const sql = `SELECT COUNT(*) FROM pomodoros WHERE DATE(date) = CURRENT_DATE`;

  try {
    const dbResponse = await client.query(sql);
    res.json({ result: dbResponse.rows[0].count });
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(400).json(err.stack);
  }
}

export async function handleGetAllPomodoros(res: any) {
  const sql = `SELECT COUNT (*) FROM pomodoros`;

  try {
    const dbResponse = await client.query(sql);
    res.json({ result: dbResponse.rows[0].count });
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(400).json(err.stack);
  }
}
