const { Course } = require("../../Models/Course");

exports.addRating = async function(req, res, next) {

    let rating =({
        user: req.user._id,
        rate: req.body.rate,
      });
    
  const course = await Course.findOneAndUpdate(
    { _id: req.params.courseId },
    { $push: { ratings: rating} },
    { new: true }
  );
  res.send(rating);
};