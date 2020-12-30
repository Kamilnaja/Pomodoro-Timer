import { Settings } from '../settings/settings.interface';
import { settings } from '../settings/settings';
import { Profile } from '../model/user';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');
const googleSettings: Settings = settings;

passport.use(
  new GoogleStrategy(googleSettings, (accessToken: any, refreshToken: any, profile: Profile, done: (arg0: any, arg1: any) => any) => {
    console.log('done');
    console.log(profile);
    // save user
  })
);

export default passport;
