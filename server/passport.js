const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require('./models/googleSchema')


const GOOGLE_CLIENT_ID =
  "500617003065-tl9eaq8gi7crkiqa0f1i483r2e2su7oj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://registration-server-ten.vercel.app/auth/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      // Find or create a user based on the Google profile ID
      const user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // If the user does not exist, create a new user in the database
        const newUser = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          // Add other fields as needed
        });
        await newUser.save();
        done(null, newUser);
      } else {
        done(null, user);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
