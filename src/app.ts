import express from "express";
import routeConfig from './routes'
import {initializeApp} from './helpers'
const app: express.Application = express();
const port = process.env.APP_PORT || 3000;

initializeApp(app);
routeConfig(app);

app.get("/", (req, res) => {
  res.send("Virtuon was successfully initialized!");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
