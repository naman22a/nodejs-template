import express from "express";

// SETUP UP DOTENV
import dotenv from 'dotenv';
dotenv.config();

// IMPORTING ROUTES
import indexRoutes from './routes/index';

const app = express();
const PORT = process.env.PORT ?? 5000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/' , indexRoutes);

// STARTING THE SERVER
app.listen(PORT , () => {
     console.log(`Server started at port: ${PORT}`);
});