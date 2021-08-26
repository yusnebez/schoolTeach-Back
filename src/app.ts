import cors from "cors";
import express from "express";
import  mongoose  from "mongoose";
import morgan from "morgan";
import path from "path";
import dotenv from 'dotenv'
import config from './config';
dotenv.config();



mongoose.connect(`${process.env.MONGO_URL}`,{
  dbName: process.env.MONGO_DB || "schoolDB",
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }, err => { err ? {Error}: console.log("conected to MongoDB")})
  


// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3009);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

export default app;
