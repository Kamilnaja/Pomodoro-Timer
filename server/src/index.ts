import express from 'express';
import cors from 'cors';
import route from './routes/route';
export const app = express();

const port = process.env.PORT || 8080; // default port to listen
app.use(cors());
app.use(express.json());

// routes

app.use('/api', route);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
  res.status(404).send('what???');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
