import express, { Express,Request,Response } from "express";
import dotenv from "dotenv";
dotenv.config({path:".././.env"});
const app = express();
const port = process.env.PORT || 8080;
//routes file 
import userRoute from './routes/user';
app.use(express.json());
app.use('/api/v1',userRoute);
app.get("/",(req:Request,res:Response)=>{
res.json({
    status:"success",
    message:"Getting data"
});
});

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})