const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/', getWorkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete a single workout' });
})

router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update any workout' });
})

module.exports = router;