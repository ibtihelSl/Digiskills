const { Course } = require("../../Models/Course");

exports.removeComment = async function(req, res, next) {
    const course = await Course.findOneAndUpdate(
        { _id: req.params.courseId },
        {
          $pull: {
            comments: req.params.commentId,
          }
        }
      );
      res.send(course);
    }