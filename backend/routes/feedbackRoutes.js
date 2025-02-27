const express = require('express');
const { addFeedback, getAllFeedbacks } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/add', addFeedback);
router.get('/all', getAllFeedbacks);

module.exports = router;
