const { Course } = require("../../Models/Course");

exports.displayCourse = async function(req, res, next) {
  const course = await Course.findOne({ _id: req.params.courseId })
    .populate("modules")
    .populate("ratings")
    .populate("comments.user ratings.user", "-_id")
    .select();

  res.send(course);
};
