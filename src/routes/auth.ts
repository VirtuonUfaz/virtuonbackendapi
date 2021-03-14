import {Router} from 'express'
import jwt from 'jsonwebtoken';

const router = Router();

// @route    GET auth/login
// @desc     Receive an email address, send an OTP to email if exists.
// @access   Public
router.get('/login', (req, res, next) => {
    try {
        // TODO: check if email is valid
        if(!req.query.email)
            res.status(400).json({
                status: 400,
                msg: "Query parameter 'email' cannot be empty"
            })
        if(true) // check if user exists
            res.status(404).json({
                status: 404,
                msg: `User ${req.query.email} not found`
            })

        // TODO: create otp
        // TODO for Anday: send an email
        res.json({status: 200, msg: "Success"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({status: 500, msg: "Internal server error"});
    }
})

// @route    POST api/login
// @desc     Receive an OTP and an email address, send JWT if OTP is valid.
// @access   Public
router.post('/login', (req, res, next) => {
    if(!req.body.OTP || !req.body.email)
        res.status(400).json({
            status: 400,
            msg: `Body parameter '${req.body.email ? 'email':'OTP'}' cannot be empty`
        })
    if(true) // get user by email
        res.status(404).json({
            status: 404,
            msg: `User ${req.query.email} not found`
        })
    
    // TODO: create JWT
    res.status(200).json()
})

// @route    GET api/user
// @desc     Get user by JWT.
// @access   Private
router.get('/user', (req, res, next) => {
    // TODO: Get user by JWT
    res.send("test")
})

export default router;