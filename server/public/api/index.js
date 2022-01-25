const jwt = require("jsonwebtoken");
const express = require('express');
const path = require('path');
const vehicleRoutes = require('../routers/vehicle_router')
const {login, register} = require('../controllers/user_controller')
// var cors = require('cors')




const app =  express();

app.use(express.json());
// app.use(cors)


app.use('/api/vehicles', vehicleRoutes);

app.post('/api/login', login)

app.post('/api/signup', register)


app.listen(4000, ()=>{
    console.log('Application Listening');
})

