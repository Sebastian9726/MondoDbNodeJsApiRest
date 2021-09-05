import e from 'express';
import express, { urlencoded, json } from 'express'

const app = express();


// Importing Routes
import IndexRoutes from './routes/index'
import TaskRoutes from './routes/tasks'
import TaskDonations from './routes/donationsRoutes'

require('dotenv').config({path:'./.env'})

const puerto = process.env.PORT
// settings
app.set('port', puerto || 3000);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);
app.use('/donations', TaskDonations)

 
 
export default app;