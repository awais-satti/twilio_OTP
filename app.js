const path=require('path')
require('dotenv').config({path:__dirname+"/.env"})
const loginRoutes = require('./Routes/login')
const verifyRoutes = require('./Routes/verify')

const app = require('express')();
// const accountSID = process.env.TWILIO_SERVICE_ID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;





app.use('/login',loginRoutes);

app.use('/verify',verifyRoutes);



app.listen(process.env.PORT,console.log(`app running on PORT ${process.env.PORT}`))