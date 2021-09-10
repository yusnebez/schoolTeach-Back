  import dotenv from 'dotenv'
  dotenv.config();
  import  mongoose  from "mongoose";
  import express from "express";
  import router from "./router/router";
  import cors from "cors";
  import morgan from "morgan";
  import path from "path";
  
  
  mongoose 
  .connect(`${process.env.MONGO_URL || "mongodb+srv://yusnebez:changes66@cluster0.mymkx.mongodb.net/schoolteachretryWrites=true&w=majority"}`,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,   })   
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));


// Create Express server
const app = express();

//  // Express configuration
  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(express.static(path.join(__dirname, "public"),))
  
  app.use(router)


 app.listen(process.env.PORT || 301, () => {
    console.log('server activo')
    console.info('>'.repeat(40))
    console.info('💻  Tecnoeduca Server Live')
    console.info('📡  PORT:' , process.env.PORT)
    console.info('>'.repeat(40) + '\n')
    })
 
  export default app;
