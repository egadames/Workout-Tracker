const { Schema, model } = require('mongoose');
//

const WorkoutSchema = new Schema({
    exercises: [{
        type:{type: String},
        name: {type: String},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number},
    }],
    day: {
        type: Date,
        default: Date.now()
    },
});


module.exports = model('Workout', WorkoutSchema);
