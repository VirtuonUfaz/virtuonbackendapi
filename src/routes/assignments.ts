import { Router } from "express";
import { list, retrieve } from "../helpers/db/assignments";
import { NotFoundError } from "../helpers/exceptions";
import auth from '../middlewares/auth';

const router = Router();


// list all assignments of the user
router.get('/', auth, async (req, res, next) => {
    return res.json({
        status: 200,
        assignments: await list(req.body.user.id)
    })
})

// get assignment by id
router.get('/:id', auth, async (req, res, next) => {
    try {
        if (isNaN(+req.params.id))
            throw new TypeError("Invalid task id")
        return res.json({
            status: 200,
            assignment: await retrieve(req.body.user.id, parseInt(req.params.id))
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

// // update assignment by id
// router.post('/:id', auth, (req, res, next) => {
//     return res.json();

// })

// // delete assignment by id
// router.delete('/:id', auth, (req, res, next) => {
//     return res.json();
// })

export default router;