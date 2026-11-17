const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get JWT token from HTTP-only cookie
    const token = req.cookies.accessToken;

    // Check whether token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login.",
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store logged-in user information in request
    req.user = decoded;

    // Continue to next middleware or route
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token. Please login again.",
    });
  }
};

module.exports = authMiddleware;
