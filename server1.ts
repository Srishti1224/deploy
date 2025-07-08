import express from 'express';
import generateQuiz from './services/generateQuiz';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/generate-quiz', async (req, res) => {
  try {
    const { topics } = req.body;
    if (!Array.isArray(topics)) return res.status(400).json({ error: 'Topics must be an array.' });

    const quiz = await generateQuiz(topics);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
