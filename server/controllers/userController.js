import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/auth/userModel.js';



const userGet = asyncHandler(async (req, res) => {

    const users = await User.find({});

    res.status(200).json(users)
})


const userLogin = asyncHandler(async (req, res) => {

    const { reg_no, password } = req.body;

    if (!reg_no || !password){
        res.status(400)
        throw Error('please add all fields!')
    }

    const isRegNo = await User.findOne({ reg_no: reg_no })  
    if (!isRegNo){
        res.status(400)
        throw Error("Register Number doesn't exits!")
    }
        
    const isPassword = await bcrypt.compare(password, isRegNo.password)
    if (!isPassword){
        res.status(400)
        throw Error("Invalid credentials!")
    }

    res.status(200).json({
        msg: 'Login successful!',
        success: true,
        token: generateToken(isRegNo._id),
        data: {
            id: isRegNo._id,
            reg_no: isRegNo.reg_no,
            role: isRegNo.role
        }
    })

})


export {
    userLogin,
    userGet
};

