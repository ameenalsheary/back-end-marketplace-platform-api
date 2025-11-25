const asyncHandler = require("express-async-handler");

const createToken = require("../../utils/createToken");
const accessTokensettings = require("../../utils/accessTokensettings");

// Handle Google authentication callback
exports.googleAuthCallback = asyncHandler(async (req, res) => {
  // Get user data from request
  const user = req.user;

  // Create JWT token for authenticated session
  const token = createToken(user._id);

  // Set JWT token as HTTP-only cookie for security
  const maxAge = 90 * 24 * 60 * 60 * 1000; // 90 days expiration
  res.cookie("accessToken", token, accessTokensettings(maxAge));

  // Redirect user to frontend after successful auth
  res.redirect(process.env.FRONT_END_URL);
});
