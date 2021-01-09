import express from 'express';
import cors from 'cors';
import route from './routes/route';
import path from 'path';
export const app = express();

const port = process.env.PORT || 8080; // default port to listen
app.use(cors());
app.use(express.json());

// routes

app.use('/api', route);

app.use(express.static(path.join(__dirname, '../../web/build'))); // the same directory as below

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../web/build/index.html'));
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
