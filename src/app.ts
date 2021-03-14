import express from "express";

const app: express.Application = express();
const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
  res.send("Virtuon was successfully initialized!");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
