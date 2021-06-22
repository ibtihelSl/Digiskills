const { FAQ } = require("../../Models/FAQ");

exports.removeFAQ = async function(req, res, next) {
  await FAQ.findOneAndRemove({ _id: req.params.faqId });

  res.send("FAQ removed");
};
