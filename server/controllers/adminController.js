import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import Admin from '../models/auth/adminModel.js';
import AdminInfo from '../models/info/adminInfoModel.js';
import Nomination from '../models/nominationModel.js';
import UserInfo from '../models/info/userInfoModel.js';
import cloudinary from '../utils/cloudinary.js';
import Vote from '../models/voteModel.js';




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



const profile = asyncHandler(async (req, res) => {

    const user = await AdminInfo.find({ admin: req.user._id })

    if (!user) {
        res.status(400)
        throw Error("user doesn't exists!") 
    }

    res.status(200).json(user)
})


const getUsersList = asyncHandler(async (req, res) => {

    const users = await UserInfo.find({})

    res.status(200).json(users)
})


const getUserById = asyncHandler(async (req, res) => {

    const userId = await UserInfo.findById(req.params.id)

    if (!userId) {
        res.status(400)
        throw Error("User ID doesn't exists!")
    }

    res.status(200).json(userId)
})

const getNominationList = asyncHandler(async (req, res) => {

    const nomination = await Nomination.find({})

    res.status(200).json(nomination)
})


const getNominationById = asyncHandler(async (req, res) => {

    const nominationId = await Nomination.findById(req.params.id)

    if (!nominationId) {
        res.status(400)
        throw Error("Nomination ID doesn't exists!")
    }

    res.status(200).json(nominationId)
})




const deleteNomination = asyncHandler(async (req, res) => {

    const nominationId = await Nomination.findById(req.params.id);
    
    await cloudinary.uploader.destroy(nominationId.profile_cloudinary_id);
    await cloudinary.uploader.destroy(nominationId.party_logo_cloudinary_id);

    if (!nominationId) {
        res.status(400)
        throw Error("Nomination ID doesn't exists!")
    }else{
        await nominationId.remove();
    }

    res.status(200).json({
        message: 'Deleted successful!'
    })
})


const getUserVote = asyncHandler(async (req, res) => {

    const vote = await Vote.find({})
    
    res.status(200).json(vote)
})




const getUserVoteById = asyncHandler(async (req, res) => {
    
    const vote = await Vote.findById(req.params.id)

    if (!vote.user) {
        res.status(400)
        throw Error("User ID not found!")
    }

    const user = await UserInfo.findById(vote.user)

    res.status(200).json({
        vote: vote,
        user: user
    })
})



const userGenderAnalysis = asyncHandler(async (req, res) => {

    const users = await UserInfo.find({});
    
    const male = users.filter((val) => val.gender === "male")
    const female = users.filter((val) => val.gender === "female")
    
    res.status(200).json({
        user:{
            male: male.length,
            female: female.length
        }
    })

})


const userLocationAnalysis = asyncHandler(async (req, res) => {

    const users = await UserInfo.find({});
    
    const district = [];

    users.map(val => {
        if (typeof val.address.district === 'string') {
            district.push(val.address.district.toLowerCase())           
        }
    })

    const obj= {}
       
    for (let i = 0; i < district.length; i++){
       if(obj[district[i]] === undefined){
          obj[district[i]] = 1;
       }else{
          obj[district[i]]++;
       }
    }

    res.status(200).json(obj)
})


const voteCountAnalysis = asyncHandler(async (req, res) => {
    const vote = await Vote.find({})

    const hand = vote.filter((val) => val.vote.toLowerCase() === "hand")
    const leaf = vote.filter((val) => val.vote.toLowerCase() === "leaf")
    
    res.status(200).json({
        vote:{
            hand: hand.length,
            leaf: leaf.length
        }
    })
    
})


const voteGenderAnalysis = asyncHandler(async (req, res) => {
    const vote = await Vote.find({})

    const male = vote.filter((val) => val.gender === "male")
    const female = vote.filter((val) => val.gender === "female")
    
    res.status(200).json({
        user:{
            male: male.length,
            female: female.length
        }
    })
})


const voteLocationAnalysis = asyncHandler(async (req, res) => {
    const vote = await Vote.find({})
 
    const district = [];

    vote.map(val => {
        if (typeof val.location === 'string') {
            district.push(val.location.toLowerCase())           
        }
    })

    const obj= {}
       
    for (let i = 0; i < district.length; i++){
       if(obj[district[i]] === undefined){
          obj[district[i]] = 1;
       }else{
          obj[district[i]]++;
       }
    }

    res.status(200).json(obj)
    
    
})


export {
    adminLogin,
    profile,
    getUsersList,
    getUserById,
    getNominationList,
    getNominationById,
    deleteNomination,
    getUserVote,
    getUserVoteById,
    userGenderAnalysis,
    userLocationAnalysis,
    voteGenderAnalysis,
    voteLocationAnalysis,
    voteCountAnalysis
};
