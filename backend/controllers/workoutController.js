const Workout = require('../models/workoutModels');
const mongoose = require('mongoose');

const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts);
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO SUCH WORKOUT' });
    }
    
    const workout = await Workout.findById(id);
    if(!workout) {
        return res.status(404).json({ error: 'No such workout was found in the database' })
    }
    return res.status(200).json(workout);
}

const createWorkout = async (req, res) => {
    const {title, reps, load, sets} = req.body;

    let emptyFields = [];

    if(!title) {
        emptyFields.push('title');
    }

    if(!reps) {
        emptyFields.push('reps');
    }

    if(!sets) {
        emptyFields.push('sets');
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({ error:'Please fill the necessary fields', emptyFields })
    }
    try {
        const workout = await Workout.create({ title, reps, load, sets });
        console.log(workout);
        return res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    return res.json({ mssg: "Posted a new workout routine" });
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO SUCH WORKOUT' });
    }
    
    const workout = await Workout.findOneAndDelete({_id: id});

    if(!workout) {
        return res.status(400).json({ error: 'No such workout was found in the database' })
    }
    return res.status(200).json(workout);
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'NO SUCH WORKOUT' });
    }
    
    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!workout) {
        return res.status(400).json({ error: 'No such workout was found in the database' })
    }
    return res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}