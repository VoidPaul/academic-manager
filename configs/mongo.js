"use strict"

import mongoose from "mongoose"

export const dbConnection = async () => {
    try {
        mongoose.connection.on("connecting", () => {
            console.log("MongoDB | Connecting to MongoDB Service")
        })

        mongoose.connection.on("connected", () => {
            console.log("MongoDB | Connected to MongoDB Service")
        })

        mongoose.connection.on("open", () => {
            console.log("MongoDB | Connected to MongoDB Database")
        })

        mongoose.connection.on("reconnected", () => {
            console.log("MongoDB | Reconnected to MongoDB Service")
        })

        mongoose.connection.on("disconnected", () => {
            console.log("MongoDB | Disconnected to MongoDB Service")
        })

        await mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50,
        })
    } catch (err) {
        console.log(`Database connection failed: ${err}`)
    }
}