const { Course } = require("../../Models/Course");

exports.removeRating = async function(req, res, next) {
    await Course.findOneAndUpdate(
        { _id: req.params.courseId },
        {
          $pull: {
            ratings: req.params.ratingId,
          }
        }
      );
      res.send("succ");
    }
