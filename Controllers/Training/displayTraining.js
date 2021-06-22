const { Training } = require("../../Models/Training");

exports.displayTraining = async function(req, res, next) {
  const trainings = await Training.find({ _id: req.params.trainingId }).populate(
    "manager trainingManager learner mandatoryCourses optionalCourses"
  );

  res.send(trainings);
};
