import express from "express";
const app = express();
const port = 8080; // default port to listen

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// add new pomodoro
app.post("/pomodoros", (req, res) => {});

// get all pomodoros
app.get("/pomodoros", (req, res) => {});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
