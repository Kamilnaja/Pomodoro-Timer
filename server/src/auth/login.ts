import { settings } from '../settings/settings';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');

passport.use(
  new GoogleStrategy(
    {
      clientID: settings.clientID,
      clientSecret: settings.clientSecret,
      callbackURL: 'http://www.example.com/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {}
  )
);

export default passport;
