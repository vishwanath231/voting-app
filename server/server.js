import express from 'express';
import color from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import { errorHandle, notFound } from './middlewares/errorMiddleware.js';
import userRouter from './routers/userRouter.js';
import adminRouter from './routers/adminRouter.js';


// config for environment vaiables
dotenv.config()

// connect to database -> call the function
connectDB()

// initial express app
const app = express();


// Generate two digit random number 




// Express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors()) // Cross Origin Resource Sharing


// morgan only for development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev")) // its help to show response code and path
}

// get request in path: http://localhost:5000
app.get('/', (req, res) => {
    res.send('server is running...')
})

// Router
app.use('/api/users', userRouter)
app.use('/api/admin', adminRouter)

// Error handle 
app.use(errorHandle)
app.use(notFound)

// app port
const PORT = process.env.PORT || 5000; 

// port listen
app.listen(PORT, () => {
    console.log(`server is running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.black);
})