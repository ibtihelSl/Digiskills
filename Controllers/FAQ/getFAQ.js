const { FAQ } = require("../../Models/FAQ");

exports.getFAQ = async function(req, res, next) {
  const faq = await FAQ.findOne({ _id: req.params.faqId })
  .select();

  res.send(faq);
};
