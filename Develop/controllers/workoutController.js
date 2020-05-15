const Workout = require('../models');

module.exports = {
    getLastWorkout: async (req, res) => {
        try {
            const workouts = await Workout.find({});
            console.log(workouts)
            return res.json(workouts);
        } catch (e) {
            console.log(e)
            return res.status(403).json(e);
        }
    },
    addExercise: async (req, res) => {

    },
    createWorkout: async (req, res) => {

    },
    getWorkoutsInRange: async (req, res) => {

    },
};
