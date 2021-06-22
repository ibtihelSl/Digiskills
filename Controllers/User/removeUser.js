const { User } = require("../../Models/User");
const { Training } = require("../../Models/Training");


exports.removeUser = async function(req, res, next) {
  await User.findOneAndRemove({ _id: req.params.userId });

  await Training.findAndRemove(
    { manager: req.params.userId }
  );

  res.send("User deleted");
};
