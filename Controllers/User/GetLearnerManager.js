const { User } = require("../../Models/User");

exports.GetLearnerManager = async function (req, res, next) {
  const user = await User.find({ role: "Learner", company: req.params.company })
    .populate({ path: "training" })
    .select("-password ");
  res.send(user);
};