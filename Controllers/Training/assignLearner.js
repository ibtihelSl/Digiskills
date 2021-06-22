const { User } = require("../../Models/User");
const { Training } = require("../../Models/Training");

exports.assignLearner = async function(req, res, next) {
  const training = await Training.findOneAndUpdate(
    { _id: req.params.trainingId },
    { $push: { learner: req.params.userId } },
    { new: true }
  );

  await User.findOneAndUpdate(
    { _id: req.params.userId },
    { $push: { training: training._id } },
    { new: true }
  );

  res.send("Learner added to Training");
};
