import { Router } from "express";
import { getStudentGrades } from "../helpers/db/grades";
import auth from '../middlewares/auth';

const router = Router();

// IMPORTANT: 
// This endpoint does not return all grades.
// It returns only grades that belongs 
// to signed in user.
router.post('/', auth, async (req, res, next) => {
    return res.json({
        status: 200, 
        grades: await getStudentGrades(
            req.body.user.id,
            req.body.year, req.body.semester, req.body.subject
        )
    })
});

export default router;
