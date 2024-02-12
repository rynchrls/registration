const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_URL = "https://registration-client-sigma.vercel.app/success";

// if the login method success
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      cookie: req.cookies
    });
  }
});

// to logout and destroy session
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect(CLIENT_URL);
});


// if the authentication failed
router.get("/failure", (req, res) => {
  res.status(401).send("Login Failed!");
});


// redirect to google model to authenticate
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);


// google authentication
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://registration-client-sigma.vercel.app/success",
    failureRedirect: "/auth/failure",
  })
);

module.exports = router;
