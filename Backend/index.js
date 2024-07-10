import express from "express";
import dotenv from "dotenv";
import createRoute from "./routers/createRoute.js";
import readRoute from "./routers/readRoute.js";
import deleteRoute from "./routers/deleteRoute.js";
import updateRoute from "./routers/updateRoute.js";


import db from "./db.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', createRoute);
app.use('/api',readRoute);
app.use('/api', deleteRoute);
app.use('/api', updateRoute);


const PORT = process.env.PORT;

app.listen(PORT,(req, res) => {
    console.log(`Server is running on port ${PORT}`);
})