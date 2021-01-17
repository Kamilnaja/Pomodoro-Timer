import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";
import route from "./routes/route";
export const app = express();

const port = process.env.PORT || 8080; // default port to listen

app.use(cors());
app.use(express.json());

// routes
app.use(morgan("dev"));

app.use("/api", route);

app.use(express.static(path.join(__dirname, "../../../web/build"))); // the same directory as below

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../web/build/index.html"));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
