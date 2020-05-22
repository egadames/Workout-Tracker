const Workout = require('../models/workout');

module.exports = {
    getLastWorkout: async (req, res) => {
        try {
            const workouts = await Workout.find();
            return res.json(workouts);
        } catch (e) {
            return res.status(403).json(e);
        }
    },
    addExercise: async (req, res) => {
        const { id } = req.params;
        const { type, name, duration, distance, weight, reps, sets } = req.body;
        try {
            const newWorkout = await Workout.findByIdAndUpdate( id, { $push: { exercises: req.body }},{new: true,  runValidators: true});
            return res.json(newWorkouts);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    createWorkout: async (req, res) => {
        try {
            const newWorkout = await new Workout({}).save();
            return res.json(newWorkouts);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    getWorkoutsInRange: async (req, res) => {
        try {
            const rangeWorkouts = await Workout.find({}).limit(7);
            return res.json(rangeWorkouts);
        } catch (e) {
            return res.status(403).json(e);
        }
    },
};
