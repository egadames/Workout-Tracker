const router = require('express').Router();
// const workoutRoutes = require('./workoutRoutes');
const { createWorkout, getLastWorkout, addExercise, getWorkoutsInRange } = require('../../controllers/workoutController');


// /api/user
// router.use('/workouts', workoutRoutes);

router.route('/workouts/')
    .post(createWorkout)
    .get(getLastWorkout);

router.get('/workouts/range', getWorkoutsInRange);

router.route('/workouts/:id')
    .put(addExercise);



module.exports = router;
