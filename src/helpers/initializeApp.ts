import {Application} from 'express'
import cors from 'cors';

const init = (app: Application) => {
    app.use(cors());
}

export default init;