import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import { dbConnection } from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import apiLimiter from "../src/middlewares/validate-petition-amount.js"

const middlewares = (app) => {
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())
  app.use(helmet())
  app.use(morgan("dev"))
  app.use(apiLimiter)
}

const routes = (app) => {}

const connectDB = async () => {
  try {
    await dbConnection()
  } catch (err) {
    console.log(`Database connection failed: ${err}`)
  }
}

export const initServer = () => {
  const app = express()
  try {
    middlewares(app)
    connectDB()
    routes(app)
    app.listen(process.env.PORT)
    console.log(`Server | Running on port: ${process.env.PORT}`)
  } catch (err) {
    console.log(`Server | Init failed: ${err}`)
  }
}
