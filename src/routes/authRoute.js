const express = require(`express`);

const {
  signUpValidator,
  logInValidator,
  signInValidator,
  verifySignInValidator
} = require("../utils/validators/authValidators/authValidator");

const {
  forgotPasswordValidator,
  passwordResetCodeValidator,
} = require("../utils/validators/authValidators/forgotPassword");

const {
  signUp,
  logIn,
  signIn,
  verifySignIn,
  checkAuth,
  logOut
} = require("../services/authServises/authService");

const {
  forgotPassword,
  passwordResetCode,
} = require("../services/authServises/forgotPassword");

const protect_allowedTo = require("../services/authServises/protect&allowedTo");

const router = express.Router();

router
  .route("/signup")
  .post(
    signUpValidator,
    signUp,
  );

router
  .route("/login")
  .post(
    logInValidator,
    logIn
  );

router
  .route("/signin")
  .post(
    signInValidator,
    signIn
  );

router
  .route("/verifysignin")
  .post(
    verifySignInValidator,
    verifySignIn
  );

router
  .route("/checkauth")
  .get(
    protect_allowedTo.protect(),
    protect_allowedTo.allowedTo("admin", "customer"),
    checkAuth
  );

router
  .route("/logout")
  .post(
    logOut
  );

router
  .route("/forgotPassword")
  .post(
    forgotPasswordValidator,
    forgotPassword
  );

router
  .route("/passwordResetCode")
  .put(
    passwordResetCodeValidator,
    passwordResetCode
  );

module.exports = router;
