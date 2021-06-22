const moment = require("moment");
const momentTZ = require("moment-timezone");

const { Training, updateTrainingDate } = require("../../Models/Training");

exports.updateDate = async function(req, res, next) {
  const { error } = updateTrainingDate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let start = req.body.startDate;
  let end = req.body.endDate;

  start = momentTZ.tz(start, "Africa/Tunis").format();
  end = momentTZ.tz(end, "Africa/Tunis").format();

  const training = await Training.findOneAndUpdate(
    { _id: req.params.trainingId },
    { $set: { startDate: start, endDate: end } },
    { new: true }
  );
  res.send(training);
};
