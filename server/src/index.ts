import express from 'express';
import router from './controllers/pomodoro.controller';
import cors from 'cors';
import passport from './auth/auth';
export const app = express();

const port = 8080; // default port to listen
app.use(cors());
app.use('/api', router);
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
