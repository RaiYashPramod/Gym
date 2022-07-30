const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
    }
}, { timeStamp: true });

module.exports = mongoose.model('workout', workoutSchema);