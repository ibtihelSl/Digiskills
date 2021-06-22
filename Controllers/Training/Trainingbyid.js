const { Training } = require("../../Models/Training");

exports.Trainingbyid = async function(req, res, next) {
  const trainings = await Training.find({ manager: req.user._id }).populate(
    "manager learner mandatoryCourses optionalCourses"
  );

  res.send(trainings);
};
