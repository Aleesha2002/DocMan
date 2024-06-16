const express = require("express");
const {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile
} = require("../Controllers/doctorController.js");
const { authenticate, restrict } = require("../auth/verifyToken.js");
const reviewRoute = require("./review.js");

const router = express.Router();
router.use("/:doctorId/reviews", reviewRoute);

router.get("/:id", authenticate, restrict(["doctor"]), getSingleDoctor);
router.get("/", authenticate, restrict(["admin"]), getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

module.exports= router;
