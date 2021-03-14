import express from "express";
import routeConfig from './routes'
const app: express.Application = express();
const port = process.env.APP_PORT || 3000;

routeConfig(app);

app.get("/", (req, res) => {
  res.send("Virtuon was successfully initialized!");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
