import {Application} from 'express'
import cors from 'cors';
import bodyParser from 'body-parser'

const init = (app: Application) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );
}

export default init;