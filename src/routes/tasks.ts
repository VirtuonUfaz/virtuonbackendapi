import { Router } from "express";
import { dbHelpers, otherHelpers } from "../helpers";
import { PrivateTasksType } from "../helpers/db/types";
import auth from "../middlewares/auth";

const router = Router();

router.get("/", auth, async (req, res, next) => {
  try {
    const userId: number = req.body.user?.id;
    const tasks: Array<PrivateTasksType> = await dbHelpers.tasksDB.get(userId);
    res.json({ status: 200, tasks });
  } catch (err) {
    console.error(err.message);
    return res.json({ status: 500, msg: "Internal server error" });
  }
});

router.post("/new", auth, async (req, res, next) => {
  try {
    const userId: number = req.body.user?.id;
    const {
      title,
      description,
      priority,
      is_resolved,
      deadline,
    }: PrivateTasksType = req.body;
    const newTask: Partial<PrivateTasksType> = {
      user_id: userId,
      title,
      description,
      priority,
      is_resolved,
      deadline,
    };
    const task: PrivateTasksType = await dbHelpers.tasksDB.create(newTask);
    res.json({ status: 200, newTask });
  } catch (err) {
    console.error(err.message);
    return res.json({ status: 500, msg: "Internal server error" });
  }
});

router.post("/update", auth, async (req, res, next) => {
  try {
    const userId: number = req.body.user?.id;
    const {
      id,
      title,
      description,
      priority,
      is_resolved,
      deadline,
    }: PrivateTasksType = req.body;
    const newTask: Partial<PrivateTasksType> = {
      id,
      user_id: userId,
      title,
      description,
      priority,
      is_resolved,
      deadline,
    };
    const task: number = await dbHelpers.tasksDB.update(
      otherHelpers.cleanObj(newTask)
    );
    res.json({ status: 200, task });
  } catch (err) {
    console.error(err.message);
    return res.json({ status: 500, msg: "Internal server error" });
  }
});

router.post("/delete", auth, async (req, res, next) => {
  try {
    const userId: number = req.body.user?.id;
    const { id }: PrivateTasksType = req.body;
    const newTask: Partial<PrivateTasksType> = {
      id,
      user_id: userId,
    };
    const task: number = await dbHelpers.tasksDB.remove(newTask);
    res.json({ status: 200, task });
  } catch (err) {
    console.error(err.message);
    return res.json({ status: 500, msg: "Internal server error" });
  }
});

export default router;
