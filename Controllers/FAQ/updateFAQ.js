const { FAQ, updateFAQ } = require("../../Models/FAQ");

exports.updateFAQ = async function(req, res, next) {
  const { error } = updateFAQ(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const faq = await FAQ.findOneAndUpdate(
    { _id: req.params.faqId },
    { $set: { title:req.body.title, content: req.body.content } },
    { new: true }
  );

  res.send(faq);
};
