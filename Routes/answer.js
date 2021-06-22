const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isLearner = require("../Middleware/isLearner");
const isTrainingManager = require("../Middleware/isTrainingManager");
const isManager = require("../Middleware/isManager");

const addAnswer = require("../Controllers/Answer/addAnswer");
const removeAnswer = require("../Controllers/Answer/removeAnswer");
const addComment = require("../Controllers/Answer/addComent");
const updateAnswer = require("../Controllers/Answer/updateAnswer");
const mark = require("../Controllers/Answer/mark");

router.post("/addAnswer/:quizId", auth, addAnswer.addAnswer);

router.put(
  "/removeAnswer/:answerId/:quizId",
  auth,
  removeAnswer.removeAnswer
);

router.put(
  "/addComment/:answerId",
  auth,
  addComment.addComment
);

router.put(
  "/updateAnswer/:answerId",
  auth,
  updateAnswer.updateAnswer
);

router.put("/mark/:answerId", auth, mark.mark);

module.exports = router;
