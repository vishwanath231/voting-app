import express from 'express';
const router = express.Router();
import { 
    adminLogin, 
    profile,
    getUsersList,
    getUserById,
    getNominationList,
    getNominationById,
    deleteNomination 
} from '../controllers/adminController.js';
import { adminProtect } from '../middlewares/authMiddleware.js';
import asyncHandler from 'express-async-handler';
import Nomination from '../models/nominationModel.js';
import upload from '../utils/multer.js';
import cloudinary from '../utils/cloudinary.js';
import multer from 'multer';
// import path from 'path';


// var storage = multer.diskStorage({
//     filename: function (req, file, cb){
//         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
//     }
// })

// var upload = multer({ storage: storage })

// var multiple = 

router.route('/login').post(adminLogin)
router.route('/profile').get(adminProtect, profile)
router.route('/user/list').get(adminProtect, getUsersList)
router.route('/user/:id').get(adminProtect, getUserById)
router.route('/nomination/list').get(adminProtect, getNominationList)
router.route('/nomination/:id').get(adminProtect, getNominationById)
router.route('/nomination/del/:id').delete(adminProtect, deleteNomination)



router.post('/nomination/add', async (req, res) => {
    
    try {
        console.log(req.body.profile);
        const result1 = await cloudinary.uploader.upload(req.body.profile);
        // // // if (req.files) {
        // // //     console.log(req.files);
        // // // }

        console.log(result1);

    } catch (error) {

        console.log(error);

    }
        // try{
        
        
        // const result2 = await cloudinary.uploader.upload(req.files.party_logo[0].path);
        

        // const nomination = new Nomination({
        //     profile: result1.url,
        //     reg_no: req.body.reg_no,
        //     name: req.body.name,
        //     email: req.body.email,
        //     phone_no: Number(req.body.phone_no),
        //     gender: req.body.gender,
        //     birth_date: req.body.birth_date,
        //     parent_name: req.body.parent_name,
        //     community: req.body.community,
        //     address: {
        //         door_no: req.body.door_no,
        //         street: req.body.street,
        //         city: req.body.city,
        //         taluk: req.body.taluk,
        //         post: req.body.post,
        //         district: req.body.district,
        //         pincode: Number(req.body.pincode)
        //     },
        //     party_logo: result2.url,
        //     party_name: req.body.party_name,
        //     profile_cloudinary_id: result1.public_id,
        //     party_logo_cloudinary_id: result2.public_id
        // })

        // await nomination.save();

        // return res.status(201).json({
        //     success: true,
        //     msg: 'Registration successfull',
        //     data: nomination
        // });
        
        // }catch(err){
        
        // console.log(err);
        
        // }

        

        
    }
)

export default router;
