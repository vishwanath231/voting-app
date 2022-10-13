import express from 'express';
const router = express.Router();
import { userLogin, userGet, userInfoGet, generatePin } from '../controllers/userController.js';
import { userProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(userLogin)
router.route('/').get(userProtect, userGet)
router.route('/info').get(userProtect, userInfoGet)
router.route('/:userPin').get(userProtect, generatePin)



export default router;