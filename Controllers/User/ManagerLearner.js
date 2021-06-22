const { User } = require("../../Models/User");

exports.ManagerLearner = async function (req, res, next) {
    const u = await User.findOne({ _id: req.user._id })
    .select();
    //res.send(u.company);
  const user = await User.find({ role: "Learner", company: u.company })
    .populate({ path: "training" })
    .select("-password ");
  res.send(user);
};
