import { Router } from "express";
import knex from "../db/connect";
import auth from '../middlewares/auth';

const router = Router();

router.get('/', auth, async (req, res, next) => {
    // TODO: check if user has permisson to see rooms
    let rooms = await knex('rooms')
                    .select('*')
                    .leftJoin('room_types', 'rooms.room_type_id', 'room_types.id');

    res.json(rooms);
});

export default router;
