const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const path = require("path");

// Sets up /api
router.use('/api', apiRoutes);

// router.use('/', htmlRoutes);

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/stats.html'));
});

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'../public/index.html'));
// });

module.exports = router;