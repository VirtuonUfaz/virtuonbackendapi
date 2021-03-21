import { Router } from "express";
import knex from "../db/connect";
import auth from '../middlewares/auth';

const router = Router();

router.get('/', auth, async (req, res, next) => {
    let tasks = await knex('tasks')
                    .select('*')

    res.json(tasks);
});

export default router;
