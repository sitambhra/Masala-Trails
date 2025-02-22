const Feedback = require('../models/Feedback');

// Add Feedback
const addFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ success: true, message: 'Feedback submitted!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Feedbacks
const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { addFeedback, getAllFeedbacks };
