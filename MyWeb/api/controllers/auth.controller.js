import User from "../models/user.model.js";
import Requets from "../models/request.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

//register
export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,password:hashPassword});
    try{
        await newUser.save();
        res.status(201).json({message:"user created successfully"});
    }catch(error){
        next(error);
    }
   
}
//login 
export const signin =async(req,res,next)=>{
    const{email,password}=req.body
    try{
        const validUser=await User.findOne({email})
        if(!validUser) return next(errorHandler(404,'user not found'));
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,'wrong credentials'))
            const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const{password:hashedPassword,...rest}=validUser._doc;

        const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day from now
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);

    }catch(error){
        next(error)
    }
}


//item register
export const createRequest=async(req,res,next)=>{
    const {userId,name,user_email,contact,project_type,budget_range,project_timeline,preferred_communication_mode,project_details,profilePicture}=req.body;

    //create auto id for orderid
    function idGen(userId){
        const randomString=Math.random().toString(36).substring(2,10);
        const id='ORD'+randomString+userId;
        return id;
    }
    const authId=idGen(userId)
   

    const newItem=new Requets({authId,userId, name,user_email,contact,project_type,budget_range,project_timeline,preferred_communication_mode,project_details,profilePicture});
    try{
        await newItem.save();
        res.status(202).json({message:"request created successfully"});
    }catch(error){
        next(error);
    }
   
}

//get items by userid
export const getRequetsByCustomerId = async (req, res, next) => {
    try{
       const customerId=req.params.id;
        const orders=await Requets.find({userId:customerId})
        res.json(orders)
    }catch(error){
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
};


//all items
export const allitems = async (req, res, next) => {
    try{
    
        const orders=await Requets.find({})
        res.json(orders)
    }catch(error){
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
};



export const google=async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})

        if(user){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
            const {password:hashedPassword, ...rest}=user._doc;
            const expiryDate=new Date(Date.now() + 24 * 60 * 60 * 1000);
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json(rest);
       
        }else{
            const generatedPassword=
            Math.random().toString(36).slice(-8)+
            Math.random().toString(36).slice(-8)

            const hashedPassword=bcryptjs.hashSync
            (generatedPassword,10);

            const newUser=new User({username:req.body.name.split(' ').join('').toLowerCase()+
                Math.random().toString(36).slice(-8),
                email:req.body.email,password:hashedPassword,profilePicture:req.body.photo,
            });
            await newUser.save();
            const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET);
            const {password:hashedPassword2, ...rest}=newUser._doc;
            const expiryDate=new Date(Date.now() + 24 * 60 * 60 * 1000);
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json(rest);


        }
    }catch(error){
        next(error)
    }
}


 // Adjust the path as needed
//images
export const google1 = async (req, res, next) => {
    try {
        const user = await Requets.findOne({ email: req.body.itemId });

        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
                .status(200)
                .json(rest);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

            const newUser = new Requets({
                username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-8),
                email: req.body.itemId,
                password: hashedPassword,
                profilePicture: req.body.photo
            });
            
            await newUser.save();

            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
                .status(200)
                .json(rest);
        }
    } catch (error) {
        next(error);
    }
};






export const signout=(req,res)=>{
    res.clearCookie('access_token').status(200).json('Signout Success')
}