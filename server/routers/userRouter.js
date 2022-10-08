import express from 'express';
const router = express.Router();
import { userLogin, userGet } from '../controllers/userController.js'
import { userProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(userLogin)
router.route('/').get(userProtect, userGet)


export default router;