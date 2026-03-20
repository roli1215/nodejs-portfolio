import express from 'express';
import { getAbout, postAbout } from '../controllers/aboutController';

const router = express.Router();

router.get('/about', getAbout);
router.post('/about', postAbout); 

export default router;