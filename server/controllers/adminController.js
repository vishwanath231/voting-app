import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import Admin from '../models/auth/adminModel.js';
import UserInfo from '../models/info/userInfoModel.js';



const userGet = asyncHandler(async (req, res) => {

    const users = await UserInfo.find({});

    res.status(200).json(users)
})

const adminLogin = asyncHandler( async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password){
        res.status(400)
        throw Error('please add all fields!')
    }

    const isEmail = await Admin.findOne({ email: email })  
    if (!isEmail){
        res.status(400)
        throw Error("Email doesn't exits!")
    }

        
    const isPassword = await bcrypt.compare(password, isEmail.password)
    if (!isPassword){
        res.status(400)
        throw Error("Invalid credentials!")
    }

    res.status(200).json({
        msg: 'Login successful!',
        success: true,
        token: generateToken(isEmail._id),
        data: {
            id: isEmail._id,
            name: isEmail.name,
            email: isEmail.email,
            role: isEmail.role
        }
    })
    

})


export {
    adminLogin,
    userGet
};

