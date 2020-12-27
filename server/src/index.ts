import express from 'express';
import { router as pomodoroRoutes } from './controllers/pomodoro.controller';
import cors from 'cors';
export const app = express();

const port = 8080; // default port to listen

app.use(cors());
app.use('/', pomodoroRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
