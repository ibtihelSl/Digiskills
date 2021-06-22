const { Course } = require("../../Models/Course");
const moment = require("moment");

exports.addComment = async function(req, res, next) {

    let Comment =({
        user: req.user._id,
        text: req.body.text,
        date: moment().format(),
      });
    
  const course = await Course.findOneAndUpdate(
    { _id: req.params.courseId },
    { $push: { comments: Comment} },
    { new: true }
  );
  res.send(Comment);
};