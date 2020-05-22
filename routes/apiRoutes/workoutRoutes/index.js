const router = require('express').Router();
const { createWorkout, getLastWorkout, addExercise, getWorkoutsInRange } = require('../../../controllers/workoutController');

//   /api/user/todos
router.route('/')
    .post(createWorkout)
    .get(getLastWorkout);

router.route('/:id')
    .put(addExercise);

// /api/user/emails
router.get('/range', getWorkoutsInRange);

module.exports = router;
