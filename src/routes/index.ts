import { Application } from "express";
import authRoutes from './auth'
import roomsRoutes from './rooms'

export default function(app: Application){
    app.use('/rooms', roomsRoutes)
    app.use('/auth', authRoutes)
}