const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require('./models/googleSchema')


const GOOGLE_CLIENT_ID =
  "500617003065-3r6vm4dvco58quhkpt0g8c78vsd6vnfu.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://registration-server-nine.vercel.app/auth/google/callback",
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
