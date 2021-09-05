import e from 'express';
import express, { urlencoded, json } from 'express'

const app = express();


// Importing Routes
import IndexRoutes from './routes/index'
import TaskRoutes from './routes/tasks'
import TaskDonations from './routes/donations'


// settings
app.set('port', process.env.PORT || 2500);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);
app.use('/donations', TaskDonations)

 
 
export default app;