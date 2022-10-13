import express from 'express';
const router = express.Router();
import { userLogin, generatePin } from '../controllers/userController.js';
import { userProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(userLogin)
router.route('/pin').post(userProtect, generatePin)



export default router;