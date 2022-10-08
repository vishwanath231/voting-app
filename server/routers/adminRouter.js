import express from 'express';
const router = express.Router();
import { adminLogin, userGet } from '../controllers/adminController.js';
import { adminProtect } from '../middlewares/authMiddleware.js';

router.route('/').get(adminProtect, userGet)
router.route('/login').post(adminLogin)

export default router;