import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

//cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

//url
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))

//cookie-parser
app.use(cookieParser())


export {app}