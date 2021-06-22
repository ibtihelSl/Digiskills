const { FAQ } = require("../../Models/FAQ");

exports.displayFAQ = async function(req, res, next) {
  const page = req.query.page;
  const perPage = 20;
  const query = req.query.title;

  if (!query) {
    const displayFAQ = await FAQ.find();
    res.send(displayFAQ);
  }

  const count = await FAQ.find({
    title: { $regex: query, $options: "i" }
  }).count();

  // search for a FAQ
  const faq = await FAQ.find({
    title: { $regex: query, $options: "i" }
  })
    .select()

    // pagination
    .limit(perPage)
    .skip((page - 1) * perPage);

  res.send({ faq, count });
};
