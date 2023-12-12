import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import { User } from "../Models/user";

const prisma = new PrismaClient();

let users:User[] = [
  {
role:"user",
active:true,
name:"samuel",
email:"samkam@gmail.com",
photo:"user-one.jpg",
password:"test1234"
},
{
role:"user2",
active:true,
name:"sam",
email:"sam@gmail.com",
photo:"user-two.jpg",
password:"test1234"
}
];
export const createUser = async (req:Request,res:Response):Promise<void>=>{
    const user:User ={
role:req.body.role,
active:req.body.active,
name:req.body.name,
email:req.body.email,
photo:req.body.photo,
password:req.body.password
    }
  //PUSH TO ARRAY OR ADD TO DB
  const post = await prisma.user.create({
data:user
  });
  res.status(201).json({
    status:"success",
    message:"User created successfully",
    body:user
  })
}

export const getUsers = (req:Request,res:Response):void=>{
res.status(200).json({
  status:"success",
  message:"All users",
  body:users
})
}
// export const getOneUser = (req:Request,res:Response):void=>{
//  const user = users.find(x=>x.id=== parseInt(req.params.id));
//  res.status(200).json({
//   status:"success",
//   message:"got user",
//   body:user
//  })
// }

// export const updateUser = (req:Request,res:Response):void=>{
//  const user =  users.find(x=>x.id=== parseInt(req.params.id));
//  if(!user){
//   res.status(404).json({status:"not found"})
//  }else{
//   user.name = req.body.title || user.name;
//   user.email = req.body.email || user.email;
//   user.photo = req.body.photo || user.photo;
//   user.role = req.body.role || user.role;
//   user.active = req.body.active || user.active;
//   user.password = req.body.password || user.password;
//   res.status(201).json({
//     status:"success",
//     message:"updated successfully",
//     body:user
//   })
//  }
// }
// export const deleteUser = (req:Request, res:Response):void => {
//   //get the index of passed value
//   const user =  users.findIndex(x=>x.id=== parseInt(req.params.id));
// if(user === -1){
// res.status(404).json({status:"failure",message:"user not found"})
// }
// users.splice(user,1);
// res.status(204).json({
//   status:"success",
//   message:"user deleted successfully"
// })

// }