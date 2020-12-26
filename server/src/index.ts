import express from 'express';
export const app = express();
const port = 8080; // default port to listen
import { router as pomodoroRoutes } from './controllers/pomodoro.controller';

app.use('/', pomodoroRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
