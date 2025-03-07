import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import taskRoutes from './routes/task.route.js';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running at port: ' + PORT);
});

export default app;