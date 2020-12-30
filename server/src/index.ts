import express from 'express';
import pomodorosRoute from './routes/pomodoro.route';
import authRoute from './routes/auth.route';

import cors from 'cors';
export const app = express();

const port = process.env.PORT || 8080; // default port to listen
app.use(cors());
app.use(express.json());

// routes

app.use('/api', pomodorosRoute);
app.use('/auth', authRoute);
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
