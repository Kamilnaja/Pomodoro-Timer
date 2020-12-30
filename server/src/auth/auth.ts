import { settings } from '../settings/settings';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');

passport.use(
  new GoogleStrategy(
    {
      clientID: settings.clientID,
      clientSecret: settings.clientSecret,
      callbackURL: 'mywebsite.co3'
    },
    (accessToken: any, refreshToken: any, profile: { id: any }, done: (arg0: any, arg1: any) => any) => {
      console.log('done');
      // save user
    }
  )
);

export default passport;
