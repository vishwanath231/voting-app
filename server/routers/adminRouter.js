import express from 'express';
const router = express.Router();
import { 
    adminLogin, 
    profile,
    getUsersList,
    getUserById,
    getNominationList,
    getNominationById 
} from '../controllers/adminController.js';
import { adminProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(adminLogin)
router.route('/profile').get(adminProtect, profile)
router.route('/user/list').get(adminProtect, getUsersList)
router.route('/user/:id').get(adminProtect, getUserById)
router.route('/nomination/list').get(adminProtect, getNominationList)
router.route('/nomination/:id').get(adminProtect, getNominationById)



export default router;