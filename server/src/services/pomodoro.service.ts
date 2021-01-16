import client from "../db/db";

export function handleAddPomodoro(res: any) {
  const sql = "INSERT INTO pomodoros (userID, date) VALUES (?,?)";
  // todo - get user
  const params = ["kamil naja", new Date()];

  client.query(sql, params, (err: Error, result: any) => {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
    }
    console.log(result);
    res.json({
      message: "success",
    });
  });
}

export function handleGetTodaysPomodoros(res: any) {
  const sql = `
  SELECT COUNT(*) as pomodorosDoneToday 
  FROM pomodoros 
  WHERE date(datetime(date / 1000 , "unixepoch")) = date("now")`;

  client.query(sql, (err: Error, result: any) => {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
    }
    res.send(result[0]);
  });
}
