const _ = require("lodash");

const { FAQ, validateFAQ } = require("../../Models/FAQ");

exports.addFaq = async function(req, res, next) {
  const { error } = validateFAQ(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let faq = new FAQ(
    _.pick(req.body, ["title", "content"])
  );
  await faq.save();

  res.send(faq);
};
