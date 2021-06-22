const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;

const faqSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const FAQ = mongoose.model("FAQ", faqSchema);

function validateFAQ(faq) {
  const schema = {
    title: joi.string().required(),
    content: joi.string().required()
  };
  return joi.validate(faq, schema);
}

function updateFAQ(faq) {
  const schema = {
    title: joi.string().required(),
    content: joi.string().required()
  };
  return joi.validate(faq, schema);
}

module.exports = {
  FAQ,
  validateFAQ,
  updateFAQ
};
