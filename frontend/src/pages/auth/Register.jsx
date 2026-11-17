import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  Alert,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PersonOutlined from "@mui/icons-material/PersonOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";

import useAuth from "../../hooks/useAuth";

import authBackground from "../../assets/images/auth-bg.png";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { register, loading, error: authError, setError } = useAuth();

  const navigate = useNavigate();
  const [successOpen, setSuccessOpen] = useState(false);

  // Validate individual fields
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        return "";

      case "email": {
        if (!value.trim()) return "Email is required";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value.trim())) {
          return "Enter a valid email address";
        }

        return "";
      }

      case "mobile":
        if (!value.trim()) return "Mobile number is required";

        if (!/^[0-9]{10}$/.test(value)) {
          return "Enter a valid 10-digit mobile number";
        }

        return "";

      case "password":
        if (!value.trim()) return "Password is required";

        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }

        return "";

      case "confirmPassword":
        if (!value.trim()) return "Confirm password is required";

        if (value !== formData.password) {
          return "Passwords do not match";
        }

        return "";

      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    // Clear backend messages when the user changes a field
    setError("");
    setSuccessMessage("");

    if (name === "password" && formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        password: validateField("password", value),
        confirmPassword:
          value === formData.confirmPassword ? "" : "Passwords do not match",
      }));

      return;
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, updatedValue),
      }));
    }

    if (name === "agreeTerms" && updatedValue) {
      setErrors((prev) => ({
        ...prev,
        agreeTerms: "",
      }));
    }
  };

  // Submit registration form

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      mobile: validateField("mobile", formData.mobile),
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword,
      ),
      agreeTerms: formData.agreeTerms
        ? ""
        : "Please accept Terms & Privacy Policy",
    };

    setErrors(newErrors);
    setError("");
    setSuccessMessage("");

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    // Send only fields required by the backend
    const registrationData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      password: formData.password,
    };

    try {
      const response = await register(registrationData);

      if (response.success) {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
          agreeTerms: false,
        });

        setErrors({});
        setShowPassword(false);
        setShowConfirmPassword(false);

        setSuccessOpen(true);
      }
    } catch (error) {
      // Error is already managed by useAuth.
    }
  };

  useEffect(() => {
    if (!successOpen) return;

    const timer = setTimeout(() => {
      navigate("/products", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [successOpen, navigate]);

  return (
    <Box className="auth-page register-page">
      <Box className="auth-card register-card">
        {/* LEFT IMAGE PANEL */}
        <Box
          className="auth-left-panel register-left-panel"
          style={{ backgroundImage: `url(${authBackground})` }}
        >
          <Box className="register-left-content">
            <Typography className="register-left-title">
              Join droneIdea
            </Typography>

            <Typography className="register-left-description">
              Be a part of our growing drone community.
            </Typography>
          </Box>

          {/* BOTTOM WAVE ACCENT */}
          <Box className="register-wave" />
        </Box>

        {/* RIGHT REGISTER PANEL */}
        <Box className="auth-right-panel register-right-panel">
          {/* BACK TO HOME */}
          <Box className="auth-home-wrapper">
            <Box component={RouterLink} to="/" className="auth-home-link">
              <HomeOutlined />
              Back to Home
            </Box>
          </Box>

          {/* FORM CONTENT */}
          <Box className="auth-form-content register-form-content">
            <Box className="auth-header">
              <Typography className="auth-title">Create Account</Typography>

              <Typography className="auth-subtitle">
                Fill in your details to get started
              </Typography>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="auth-form register-form"
            >
              {/* FULL NAME */}
              <Box className="auth-field-group">
                <TextField
                  className="auth-field"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  autoComplete="name"
                  slotProps={{
                    htmlInput: {
                      maxLength: 80,
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlined className="auth-field-icon" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  error={Boolean(errors.name)}
                />

                {errors.name && (
                  <Typography className="auth-error-text">
                    {errors.name}
                  </Typography>
                )}
              </Box>

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
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlined className="auth-field-icon" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  error={Boolean(errors.email)}
                />

                {errors.email && (
                  <Typography className="auth-error-text">
                    {errors.email}
                  </Typography>
                )}
              </Box>

              {/* MOBILE NUMBER */}
              <Box className="auth-field-group">
                <TextField
                  className="auth-field"
                  fullWidth
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Mobile number"
                  autoComplete="tel"
                  slotProps={{
                    htmlInput: {
                      maxLength: 10,
                      inputMode: "numeric",
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlined className="auth-field-icon" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  error={Boolean(errors.mobile)}
                />

                {errors.mobile && (
                  <Typography className="auth-error-text">
                    {errors.mobile}
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
                  autoComplete="new-password"
                  slotProps={{
                    input: {
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
                    },
                  }}
                  error={Boolean(errors.password)}
                />

                {errors.password && (
                  <Typography className="auth-error-text">
                    {errors.password}
                  </Typography>
                )}
              </Box>

              {/* CONFIRM PASSWORD */}
              <Box className="auth-field-group">
                <TextField
                  className="auth-field"
                  fullWidth
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined className="auth-field-icon" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            edge="end"
                            aria-label="toggle confirm password visibility"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOffOutlined />
                            ) : (
                              <VisibilityOutlined />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  error={Boolean(errors.confirmPassword)}
                />

                {errors.confirmPassword && (
                  <Typography className="auth-error-text">
                    {errors.confirmPassword}
                  </Typography>
                )}
              </Box>

              {/* TERMS & PRIVACY */}
              <Box className="register-terms-group">
                <FormControlLabel
                  className="register-terms"
                  control={
                    <Checkbox
                      className="register-terms-checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      size="small"
                    />
                  }
                  label={
                    <Typography className="register-terms-label">
                      I agree to the{" "}
                      <Box component="span" className="register-terms-link">
                        Terms & Privacy Policy
                      </Box>
                      <Box component="span" className="auth-required-asterisk">
                        {" "}
                        *
                      </Box>
                    </Typography>
                  }
                />

                {errors.agreeTerms && (
                  <Typography className="auth-error-text register-terms-error">
                    {errors.agreeTerms}
                  </Typography>
                )}
              </Box>

              {/* BACKEND ERROR */}
              {authError && (
                <Typography className="auth-error-text">{authError}</Typography>
              )}

              {/* SUCCESS MESSAGE */}
              {successMessage && (
                <Typography
                  sx={{
                    color: "success.main",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  {successMessage}
                </Typography>
              )}

              {/* CREATE ACCOUNT */}
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
                  "Create Account"
                )}
              </Button>
            </Box>

            {/* LOGIN LINK */}
            <Typography className="auth-bottom-text">
              Already have an account?{" "}
              <Box component={RouterLink} to="/login" className="auth-link">
                Sign In
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Dialog
        open={successOpen}
        onClose={() => {
          setSuccessOpen(false);
          navigate("/products", { replace: true });
        }}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
            padding: "20px",
            textAlign: "center",
            maxWidth: "420px",
          },
        }}
      >
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "#e8f7ee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Box component="span" sx={{ fontSize: "42px", color: "#2e9d59" }}>
                ✓
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#14283a",
                mb: 1,
              }}
            >
              Registration Successful!
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                color: "#6b7c8d",
                lineHeight: 1.7,
              }}
            >
              Welcome to droneIdea! Your account has been created successfully.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Register;
