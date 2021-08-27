 
  import express from "express";
  import router from "./router/router";
  import cors from "cors";
  //import  mongoose  from "mongoose";
  import morgan from "morgan";
  import path from "path";
  import dotenv from 'dotenv'
  
  dotenv.config();

// mongoose.connect(`${process.env.MONGO_URL}`,{
//   dbName: process.env.MONGO_DB || "schoolDB",
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   }, err => { err ? {Error}: console.log("conected to MongoDB")})
  


// Create Express server
const app = express();

//  // Express configuration
  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(express.static(path.join(__dirname, "public"),))
  
  app.use(router)


 app.listen(process.env.PORT || 3008, () => {
    console.log('server activo')
    console.info('>'.repeat(40))
    console.info('💻  Tecnoeduca Server Live')
    console.info(`📡  PORT:${process.env.PORT}`)
    console.info('>'.repeat(40) + '\n')
    })
 
  export default app;
