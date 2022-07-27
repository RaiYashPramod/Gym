const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')
const router = express.Router()

//GET all workouts
router.get('/', getWorkouts);

//GET single workout by id
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a specific workout
router.delete('/:id', deleteWorkout)

//UPDATE a pre-existing workout
router.patch('/:id', updateWorkout)

module.exports = router;