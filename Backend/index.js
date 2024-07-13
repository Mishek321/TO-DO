import express from "express";
import dotenv from "dotenv";
import createRoute from "./routers/createRoute.js";
import readRoute from "./routers/readRoute.js";
import deleteRoute from "./routers/deleteRoute.js";
import updateRoute from "./routers/updateRoute.js";
import cors from 'cors'

import db from "./db.js";


dotenv.config();

const app = express();

//Middlewares
// triggers on every client request
app.use(cors()) // -> builds communication between local client and local server running on same pc.
app.use(express.json()); // -> enables express/nodejs to read JSON objects.


// routes
// url/endpoint -> used for creating apis
app.use('/api', createRoute);
app.use('/api',readRoute);
app.use('/api', deleteRoute);
app.use('/api', updateRoute);


const PORT = process.env.PORT;

app.listen(PORT,(req,res) => {
    console.log(`Server is running on port ${PORT}`);
})