const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");
const addFaq = require("../Controllers/FAQ/addFaq");
const removeFAQ = require("../Controllers/FAQ/removeFAQ");
const displayFAQ = require("../Controllers/FAQ/displayFAQ");
const updateFAQ = require("../Controllers/FAQ/updateFAQ");
const getFAQ = require("../Controllers/FAQ/getFAQ");

router.post("/addFaq", auth, isAdmin, addFaq.addFaq);

router.delete(
  "/removeFAQ/:faqId",
  auth,
  removeFAQ.removeFAQ
);

router.put(
  "/updateFAQ/:faqId",
  auth,
  updateFAQ.updateFAQ
);

router.get("/displayFAQ", auth, displayFAQ.displayFAQ);

router.get("/getFAQ/:faqId", auth, getFAQ.getFAQ);


module.exports = router;
