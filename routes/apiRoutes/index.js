const router = require('express').Router();
const { createWorkout, getLastWorkout, addExercise, getWorkoutsInRange } = require('../../controllers/workoutController');

router.route('/workouts/')
    .post(createWorkout)
    .get(getLastWorkout);

router.get('/workouts/range', getWorkoutsInRange);

router.route('/workouts/:id')
    .put(addExercise);

module.exports = router;
