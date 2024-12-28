import express from 'express'
import { create_messsage } from '../controllers/message.controller.js';


const router=express.Router();


router.post("/create_messsage",create_messsage)//register


export default router;
