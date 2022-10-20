import express from 'express';
const router = express.Router();
import { adminLogin, profile } from '../controllers/adminController.js';
import { adminProtect } from '../middlewares/authMiddleware.js';

router.route('/login').post(adminLogin)
router.route('/profile').get(adminProtect, profile)

export default router;