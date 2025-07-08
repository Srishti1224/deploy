import getMainTopic from '../services/getMainTopic';
import getAllPrerequisites from '../services/getPrerequisite';
import {Request,Response} from 'express';
const analyzeController = async (req:Request, res:Response) => {
  try {
    const { typeofinput } = req.body;
    let inputData = '';

    if (typeofinput === 'youtube') {
      inputData = req.body.input;
    } else if (typeofinput === 'pdf' || typeofinput === 'image') {
      if (!req.file) {
        return res.status(400).json({ error: 'File not uploaded' });
      }
      inputData = req.file.path;
    } else {
      return res.status(400).json({ error: 'Invalid input type' });
    }

    const mainTopic = await getMainTopic(inputData, typeofinput);
    let mainTopicsArray: string[];

    if (typeof mainTopic === 'string') {
      mainTopicsArray = [mainTopic];
    } else if (Array.isArray(mainTopic)) {
      mainTopicsArray = mainTopic;
    } else {
      return res.status(400).json({ error: 'Invalid main topic returned' });
    }

    const prerequisites = await getAllPrerequisites(mainTopicsArray);

    return res.json({ mainTopic, prerequisites });
  } catch (error) {
    console.error('Error analyzing input:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};                                        

export default analyzeController;