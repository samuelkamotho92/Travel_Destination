import { Request,Response } from "express";
import { User } from "../Models/user";
let users:User[] = [];
export const createUser = (req:Request,res:Response):void=>{
    const user:User ={
_id:users.length + 1,
role:req.body.role,
active:req.body.active,
name:req.body.name,
email:req.body.email,
photo:req.body.photo,
password:req.body.password
    }
  //PUSH TO ARRAY OR ADD TO DB
  users.push(user);
  res.status(201).json({
    status:"success",
    message:"User created successfully",
    body:user
  })
}

export const addUser = (req:Request,res:Response):void=>{


}