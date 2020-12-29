const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');

passport.use(
  new GoogleStrategy(
    {
      clientID: '886593305800-nao4tibu5v7uu03lve140sf254dcb93j.apps.googleusercontent.com',
      clientSecret: 'LMmEQjtL2BLNagJcN-x5DNrG',
      callbackURL: 'http://www.example.com/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {}
  )
);

export default passport;
