import { Router } from "express";
import { get } from "../helpers/db/rooms";
import auth from '../middlewares/auth';

const router = Router();

router.get('/', auth, async (req, res, next) => {
    // TODO: check if user has permisson to see rooms
    return res.json({
        status: 200, 
        grades: await get()
    })
});

export default router;
