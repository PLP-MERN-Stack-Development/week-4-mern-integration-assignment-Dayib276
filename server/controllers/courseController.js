const Course = require('../models/Course');

exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    next(err);
  }
};
