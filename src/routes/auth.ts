import {Router} from 'express'

const router = Router();

router.get('/', (req,res,next) => {
    res.send("Auth route")
})


export default router;