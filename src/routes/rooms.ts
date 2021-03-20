import { Router } from "express";

const router = Router();

router.get('/', async (req, res, next) => {
    res.json("Hello");
});

export default router;
