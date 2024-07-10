import express from "express";

import { create } from "../Controllers/create.js";

const router = express.Router();

router.post("/create", create);

export default router;