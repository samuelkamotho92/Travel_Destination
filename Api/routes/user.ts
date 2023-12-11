import { Router,Request,Response } from "express";
import { User } from "../Models/user";
import {createUser} from '../Controllers/user';
//create router
const router = Router();
router.post('/users', createUser);
export default router;

