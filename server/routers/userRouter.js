import express from 'express';
const router = express.Router();
import { userLogin, generatePin, verfiyPin, userProfile } from '../controllers/userController.js';
import { userProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(userLogin)
router.route('/pin').post(userProtect, generatePin)
router.route('/verify').post(userProtect, verfiyPin)
router.route('/profile').get(userProtect, userProfile)



export default router;