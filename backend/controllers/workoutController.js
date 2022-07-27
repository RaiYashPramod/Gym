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
    return res.status(200).send(workout);
}

const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        console.log(workout);
        return res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.mssg });
    }
    return res.json({ mssg: "Posted a new workout routine" });
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
}