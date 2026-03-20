import express from 'express';
import cors from 'cors';
import aboutRoutes from './src/routes/aboutRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(aboutRoutes);
export default app;