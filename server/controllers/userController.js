import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/auth/userModel.js';
import UserInfo from '../models/info/userInfoModel.js';


const userGet = asyncHandler(async (req, res) => {

    const users = await User.find({});

    res.status(200).json(users)
})

const userInfoGet = asyncHandler(async (req, res) => {

    const users = await UserInfo.find({});

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
    
    const userId = await UserInfo.find({ user: isRegNo._id })
    let userDOB;
    userId.map(val => {
        userDOB = val.birth_date
    })

    var dob = new Date(userDOB);  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    const age = Math.abs(year - 1970);
    
    if (age < 17) {
        res.status(400)
        throw Error("You not eligible to vote!, age is greater than 18")
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


const generatePin = asyncHandler(async (req, res) => {

    const { userPin } = req.params;


    const random = Math.floor(Math.random() * 90 + 10)
    

    const pin = ''+ random + userPin;

    // console.log(Number(pin));

    res.status(200).json(Number(pin))

})


export {
    userLogin,
    generatePin,
    userGet,
    userInfoGet
};

