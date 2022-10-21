import express from 'express';
const router = express.Router();
import { 
    userLogin, 
    generatePin, 
    verfiyPin, 
    userProfile,
    getNominationList,
    getNominationById 
} from '../controllers/userController.js';
import { userProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(userLogin)
router.route('/pin').post(userProtect, generatePin)
router.route('/verify').post(userProtect, verfiyPin)
router.route('/profile').get(userProtect, userProfile)
router.route('/nomination').get(userProtect, getNominationList)
router.route('/nomination/:id').get(userProtect, getNominationById)




export default router;