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
        const { id } = req.params;
        const { type, name, duration, distance, weight, reps, sets } = req.body;
        try {
            const newWorkout = await Workout.findByIdAndUpdate( id, {type, name, duration, distance, weight, reps, sets},{new: true,  runValidators: true});
            return res.json(newWorkouts);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    createWorkout: async (req, res) => {
        const { id } = req.params;
        const { type, name, duration, distance, weight, reps, sets } = req.body;
        try {
            const newWorkout = await new Workout({ id, type, name, duration, distance, weight, reps, sets}).save();
            return res.json(newWorkouts);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    getWorkoutsInRange: async (req, res) => {
        try {
            const rangeWorkouts = await Workout.find({}).limit(7);
            console.log(rangeWorkouts)
            return res.json(rangeWorkouts);
        } catch (e) {
            console.log(e)
            return res.status(403).json(e);
        }
    },
};
