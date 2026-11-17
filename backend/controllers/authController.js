const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register new user
const registerUser = async (req, res, next) => {
  try {
    const { name, email, mobile, password } = req.body;

    // 1. Check required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof mobile !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !mobile.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, mobile and password",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMobile = mobile.trim();

    // 2. Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // 3. Validate Indian mobile number
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(cleanMobile)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number",
      });
    }

    // 4. Validate password
    if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters and at most 72 bytes",
      });
    }

    // 5. Check existing email
    const existingEmail = await User.findOne({
      email: cleanEmail,
    });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    // 6. Check existing mobile
    const existingMobile = await User.findOne({
      mobile: cleanMobile,
    });

    if (existingMobile) {
      return res.status(409).json({
        success: false,
        message: "Mobile number already registered",
      });
    }

    // 7. Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 8. Create customer account
    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      mobile: cleanMobile,
      password: hashedPassword,
    });

    // 9. Send response
    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    // 10. Handle MongoDB duplicate-key errors
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern || {})[0];

      return res.status(409).json({
        success: false,
        message:
          duplicateField === "email"
            ? "Email already registered"
            : duplicateField === "mobile"
              ? "Mobile number already registered"
              : "Account details already registered",
      });
    }

    next(error);
  }
};

// Login existing customer
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Validate required fields
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // 2. Find customer by email
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    // 3. Check customer exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 4. Compare entered password with stored hash
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // 5. Generate JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    // 6. Store token in HTTP-only cookie
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // 7. Send success response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get currently logged-in user
const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Logout user
const logoutUser = (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};

module.exports = { registerUser, loginUser, getCurrentUser, logoutUser };
