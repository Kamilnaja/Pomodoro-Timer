import db from '../db/db';

export function handleAddPomodoro(res: any) {
  const sql = 'INSERT INTO pomodoros (userID, date) VALUES (?,?)';
  const params = ['kamil naja', new Date()];

  db.run(sql, params, (err: any, result: any) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    console.log(result);
    res.json({
      message: 'success'
    });
  });
}

export function handleGetTodaysPomodoros(res: any) {
  const sql = 'SELECT COUNT(*) as pomodorosDoneToday FROM pomodoros';

  db.all(sql, (err: any, result: any) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    res.json(result[0]);
  });
}
