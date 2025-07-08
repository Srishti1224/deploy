import { Router } from 'express';
const router = Router();
import analyzeController from '../controllers/analyzeController';
import { generate } from '../controllers/quizController';
import upload from '../middlewares/uploadMiddleware';

router.post('/analyze', upload.single('file'), (req, res) => {
	analyzeController(req, res);
});
router.post('/generate-quiz', generate);

export default router;
