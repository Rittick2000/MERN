const express = require("express");
const router = express.Router();

// ROUTER LAVEL MIDDLEWARE
const validationRouterMiddleware = (req, res, next) => {
  console.log("validation route middleware");
  next();
};

const auth = (req, res, next) => {
  console.log("inside auth middleware");
  req.user = { userId: 1, role: "student" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};

const isStudent = (req, res, next) => {
  if (req.user.role == "student") {
    next();
  } else {
    res.send("This portal is only for student");
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role == "admin") {
    next();
  } else {
    res.send("This portal is only for admin");
  }
};

router.get("/", validationRouterMiddleware, (req, res) => {
  console.log("in Routing get");
  res.send("in router item");
});

router.get("/student", auth, isStudent, (req, res) => {
  console.log("inside student page");
  res.send("in Student");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("inside admin page");
  res.send("in admin");
});
module.exports = router;
