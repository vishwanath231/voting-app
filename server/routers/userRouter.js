import express from 'express';
const router = express.Router();
import { userLogin, userGet, userInfoGet } from '../controllers/userController.js'
// import { userProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(userLogin)
router.route('/').get(userGet)
router.route('/info').get(userInfoGet)



export default router;