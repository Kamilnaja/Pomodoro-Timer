import express from 'express';
import passport from '../auth/auth';
const router = express.Router();

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
  res.redirect('/');
});

router.get('/test', (req, res) => {
  res.send('testing');
});

export default router;
