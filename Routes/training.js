const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isManager = require("../Middleware/isManager");
const isTrainingManager = require("../Middleware/isTrainingManager");
const isAdmin = require("../Middleware/isAdmin");


const addTraining = require("../Controllers/Training/addTraining");
const addMandatoryCourse = require("../Controllers/Training/addMandatoryCourse");
const addOptionalCourse = require("../Controllers/Training/addOptionalCourse");
const displayTraining = require("../Controllers/Training/displayTraining");
const assignLearner = require("../Controllers/Training/assignLearner");
const assignTrainingManager = require("../Controllers/Training/assignTrainingManager");
const removeCourse = require("../Controllers/Training/removeCourse");
const updateTitle = require("../Controllers/Training/updateTitle");
const updateDescription = require("../Controllers/Training/updateDescription");
const updateSpeciality = require("../Controllers/Training/updateSpeciality");
const updateDate = require("../Controllers/Training/updateDate");
const allTrainings = require("../Controllers/Training/allTrainings");
const removeTraining = require("../Controllers/Training/removeTraining");
const Trainingbyid = require("../Controllers/Training/Trainingbyid");

router.post(
  "/addTraining",
  auth,
  isManager ,
  addTraining.addTraining
);

router.put(
  "/addMandatoryCourse/:trainingId/:courseId",
  auth,
  isManager ,
  addMandatoryCourse.addMandatoryCourse
);

router.put(
  "/addOptionalCourse/:trainingId/:courseId",
  auth,
  isManager ,
  addOptionalCourse.addOptionalCourse
);

router.put(
  "/removeCourse/:trainingId/:courseId",
  auth,
  isManager ,
  removeCourse.removeCourse
);

router.put(
  "/assignLearner/:trainingId/:userId",
  auth,
  isManager ,
  assignLearner.assignLearner
);

router.put(
  "/assignTrainingManager/:trainingId/:userId",
  auth,
  isManager,
  assignTrainingManager.assignTrainingManager
);

router.put(
  "/updateTitle/:trainingId",
  auth,
  isManager,
  updateTitle.updateTitle
);

router.put(
  "/updateDescription/:trainingId",
  auth,
  isManager,
  updateDescription.updateDescription
);

router.put(
  "/updateSpeciality/:trainingId",
  auth,
  isManager,
  updateSpeciality.updateSpeciality
);

router.put(
  "/updateDate/:trainingId",
  auth,
  isManager,
  updateDate.updateDate
);

router.get(
  "/displayTraining/:trainingId",
  auth,
  displayTraining.displayTraining
);

router.get(
  "/allTrainings", 
  auth,
  allTrainings.allTrainings
  );

  router.get(
    "/Trainingbyid", 
    auth,
    Trainingbyid.Trainingbyid
    );
  
router.delete(
  "/removeTraining/:trainingId",
  auth,
  removeTraining.removeTraining
);

module.exports = router;
