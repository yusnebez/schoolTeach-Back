import dotenv from 'dotenv'
dotenv.config();

export default{
MONGO_DB: process.env.MONGO_DB,
MONGO_URL:process.env.MONGO_URL,
SECRET:process.env.SECRET,
PORT:process.env.PORT
}