const { User } = require("../../Models/User");

exports.allManagers = async function(req, res, next) {
  const user = await User.find({ role: "Manager" })
  .populate({ path: "training" })
  .select("-password");
  res.send(user);
};
