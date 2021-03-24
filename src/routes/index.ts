import { Application } from "express";
import journalsRoutes from './journals'
import assignmentsRoutes from './assignments'
import authRoutes from './auth'
import gradesRoutes from './grades'
import roomsRoutes from './rooms'
import tasksRoutes from './tasks'

export default function(app: Application){
    app.use('/rooms', roomsRoutes)
    app.use('/auth', authRoutes)
    app.use('/tasks', tasksRoutes)
    app.use('/grades', gradesRoutes)
    app.use('/assignments', assignmentsRoutes)
    app.use('/journals', journalsRoutes)
}