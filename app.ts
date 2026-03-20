import express from 'express';
import cors from 'cors';
import projectRoutes from './src/routes/projectRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(aboutRoutes);
export default app;