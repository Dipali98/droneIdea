const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { loginLimiter } = require("../middleware/rateLimitMiddleware");
// const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Customer registration
router.post("/register", registerUser);

// Customer login
router.post("/login", loginLimiter, loginUser);
// Get currently logged-in user
router.get("/profile", authMiddleware, getCurrentUser);

// Customer logout
router.post("/logout", authMiddleware, logoutUser);

// Temporary admin authorization test
// router.get(
//   "/admin-test",
//   authMiddleware,
//   roleMiddleware("admin"),
//   (req, res) => {
//     res.status(200).json({
//       success: true,
//       message: "Admin access granted",
//     });
//   },
// );

module.exports = router;
