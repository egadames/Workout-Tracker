const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

// /api/user
router.use('/workouts', workoutRoutes);

module.exports = router;
