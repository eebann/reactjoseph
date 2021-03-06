 const express = require('express');
 const mongoose = require('mongoose');
 const key = require('./config/key');
 require('./models/User.js');
 require ('./services/passport');
 
 mongoose.connect(key.mongoURI);
 const app = express();
 require('./routes/authRoutes')(app);

 


const PORT = process.env.PORT || 5000
 app.listen(PORT); 