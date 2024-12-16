const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middlewares/loggerMiddleware');

require('dotenv').config();

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use(logger);

app.use('/api/students', studentRoutes); // Here we are using middleware to use student routes


// app.get('/test', (req, res)=>{
//     res.status(200);
//     res.send("Welcome to root URL of Server");
// });

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,  and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);