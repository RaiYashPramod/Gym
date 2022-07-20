const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controllers/workoutController')
const router = express.Router()

//GET all workouts
router.get('/', getWorkouts);

//GET single workout by id
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a specific workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete a single workout' });
})

//UPDATE a pre-existing workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update any workout' });
})

module.exports = router;