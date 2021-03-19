import { Application } from "express";
import authRoutes from './auth'

export default function(app: Application){
    app.use('/auth', authRoutes)
}