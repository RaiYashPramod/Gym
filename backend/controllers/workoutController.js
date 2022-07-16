const workoutRoutes = require('../routes/workouts')

const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts);
}

const getWorkout = async (req, res) => {
    const workout = await Workout.findById(req.param.id);

    if(!workout) {
        return res.status(404).json({ error: 'No such workout was found in the database' })
    }
}

const createWorkout = async(req, res) => {
    const {title, reps, load} = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        return res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.mssg });
    }
    return res.json({ mssg: "Posted a new workout routine" });
}

module.exports = {
    createWorkout
}