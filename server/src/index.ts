import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { router } from './route';
import * as dotenv from 'dotenv';
import './db/db';

dotenv.config();

export const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../../../web/build'))); // the same directory as below

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../web/build/index.html'));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
