import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import Course from '../models/Course';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const seedCourses = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  const data = fs.readFileSync(path.join(__dirname, 'concept_graph.json'), 'utf-8');
  const courses = JSON.parse(data);

  await Course.deleteMany(); // Optional: clear existing data
  await Course.insertMany(courses);

  console.log('Courses inserted successfully');
  process.exit();
};

seedCourses();
