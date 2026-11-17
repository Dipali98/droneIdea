import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import BuildOutlined from "@mui/icons-material/BuildOutlined";
import HeadsetMicOutlined from "@mui/icons-material/HeadsetMicOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";

import authBackground from "../../assets/images/auth-bg.png";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { login, loading, error: authError, setError } = useAuth();

  // Validate individual fields
  const validateField = (name, value) => {
    if (name === "email") {
      if (!value.trim()) return "Email is required";

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value.trim())) {
        return "Enter a valid email address";
      }
    }

    if (name === "password" && !value.trim()) {
      return "Password is required";
    }

    return "";
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setError("");

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, updatedValue),
      }));
    }
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };

    setErrors(newErrors);
    setError("");

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    try {
      const response = await login(formData);

      if (response.success) {
        if (response.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      // Error is already managed by useAuth.
    }
  };
  return (
    <Box className="auth-page login-page">
      <Box className="auth-card login-card">
        {/* LEFT IMAGE PANEL */}
        <Box
          className="auth-left-panel login-image-panel"
          style={{ backgroundImage: `url(${authBackground})` }}
        >
          <Box className="login-hero-content">
            <Typography className="login-hero-title">
              Fly. Repair.
              <br />
              Explore.
            </Typography>

            <Typography className="login-hero-description">
              Your trusted drone partner for all your needs.
            </Typography>
          </Box>

          {/* BOTTOM FEATURES */}
          <Box className="login-features">
            {[
              { icon: <SecurityOutlined />, label: "Secure Access" },
              { icon: <HeadsetMicOutlined />, label: "24/7 Support" },
              { icon: <BuildOutlined />, label: "Expert Repair" },
            ].map((item) => (
              <Box className="login-feature-item" key={item.label}>
                <Box className="login-feature-icon">{item.icon}</Box>

                <Typography className="login-feature-label">
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT LOGIN PANEL */}
        <Box className="auth-right-panel login-form-panel">
          {/* BACK TO HOME */}
          <Box className="auth-home-wrapper">
            <Box component={RouterLink} to="/" className="auth-home-link">
              <HomeOutlined />
              Back to Home
            </Box>
          </Box>

          {/* FORM CONTENT */}
          <Box className="auth-form-content login-form-content">
            <Box className="auth-header login-header">
              <Typography className="auth-title">Welcome Back!</Typography>

              <Typography className="auth-subtitle">
                Sign in to your account
              </Typography>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="auth-form login-form"
            >
              {/* EMAIL */}
              <Box className="auth-field-group">
                <TextField
                  className="auth-field"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined className="auth-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />

                {errors.email && (
                  <Typography className="auth-error-text">
                    {errors.email}
                  </Typography>
                )}
              </Box>

              {/* PASSWORD */}
              <Box className="auth-field-group">
                <TextField
                  className="auth-field"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  error={Boolean(errors.password)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined className="auth-field-icon" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? (
                            <VisibilityOffOutlined />
                          ) : (
                            <VisibilityOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {errors.password && (
                  <Typography className="auth-error-text">
                    {errors.password}
                  </Typography>
                )}
              </Box>

              {/* REMEMBER ME AND FORGOT PASSWORD */}
              <Box className="login-options">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      size="small"
                    />
                  }
                  label={
                    <Typography className="login-remember-label">
                      Remember me
                    </Typography>
                  }
                />

                <Typography
                  component={RouterLink}
                  to="/forgot-password"
                  className="forgot-password-link"
                >
                  Forgot password?
                </Typography>
              </Box>

              {authError && (
                <Typography className="auth-error-text">{authError}</Typography>
              )}

              {/* SIGN IN BUTTON */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={loading ? null : <ArrowForwardRounded />}
                className="auth-submit"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </Box>

            {/* REGISTER LINK */}
            <Divider className="login-divider" />

            <Typography className="auth-bottom-text login-register-text">
              Don't have an account?{" "}
              <Box component={RouterLink} to="/register" className="auth-link">
                Create Account
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
