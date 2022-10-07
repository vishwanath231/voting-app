import express from 'express';
const router = express.Router();
import { userLogin, userGet } from '../controllers/userController.js'


router.route('/login').post(userLogin)
router.route('/').get(userGet)


export default router;