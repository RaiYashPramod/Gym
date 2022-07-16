const express = require('express');
const {
    createWorkout,
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'});
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workouts'});
})

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete a single workout' });
})

router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update any workout' });
})

module.exports = router;