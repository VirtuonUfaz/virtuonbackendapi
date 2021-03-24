import { Router } from "express";
import { list, retrieve } from '../helpers/db/journals'
import { NotFoundError } from "../helpers/exceptions";

const router = Router()

// list
router.get('/', async (req, res) => {
    return res.json({
        status: 200,
        journals: await list()
    })
})

// retrieve
router.get('/:id', async (req, res) => {
    try {
        if (isNaN(+req.params.id))
            throw new TypeError("Invalid journal id")
        return res.json({
            status: 200,
            assignment: await retrieve(+req.params.id)
        });
    } catch (err) {
        switch (err.constructor) {
            case TypeError:
                return res.json({status: 400, msg: err.message})
            case NotFoundError:
                return res.json({status: 404, msg: err.message})
            default:
                console.error(err.message);
                return res.json({status: 500, msg: "Internal Server Error"})
        }
    }
})

export default router;