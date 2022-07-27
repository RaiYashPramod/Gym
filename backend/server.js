require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
 
app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    console.log('Connected To DataBase Successfully!!');
    app.listen(process.env.PORT, () => {
        console.log('Your server is up and running on PORT', process.env.PORT );
    });
 })
 .catch((error) => {
    console.log('Failed to connect to DataBase');
 }) 

