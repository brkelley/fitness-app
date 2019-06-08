const mongoose = require('mongoose');

const workoutRoutineSchema = new mongoose.Schema({
    routineMetadata: String,
    exercises: [{
        exerciseName: String,
        sets: [{
            repCountLow: Number,
            repCountHigh: Number
        }]
    }]
});

module.exports = mongoose.model('WorkoutRoutines', workoutRoutineSchema, 'workoutRoutines');
