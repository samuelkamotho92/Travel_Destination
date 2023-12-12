import { Router,Request,Response } from "express";
import { User } from "../Models/user";
import {createUser, deleteUser, getOneUser, getUsers, updateUser} from '../Controllers/user';
//create router
const router = Router();
router.route('/users').post(createUser).get(getUsers);
router.route('/users/:id').get(getOneUser).patch(updateUser).delete(deleteUser)
export default router;

