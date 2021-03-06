const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const key = require('../config/key');

const User = mongoose.model('users');



passport.use(
    new GoogleStrategy( {
  clientID:key.googleClientID,
  clientSecret:key.googleClientSecret,
  callbackURL:'/auth/google/callback'
},
  (accessToken, refreshToken, profile, done)=>{
    new User ({ googleId: profile.id}).save();
}
)
); 