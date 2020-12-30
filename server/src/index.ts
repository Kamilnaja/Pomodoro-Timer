import express from 'express';
import pomodorosController from './controllers/pomodoro.controller';
import loginController from './controllers/login.controller';

import cors from 'cors';
export const app = express();

const port = process.env.PORT || 8080; // default port to listen

app.use(cors());
app.use('/api', pomodorosController);
app.use('/auth', loginController);
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
