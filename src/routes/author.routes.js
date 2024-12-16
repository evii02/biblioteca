import express from "express";
import { getAuthorByName, getAuthors } from "../controllers/author.controllers.js";

const router = express.Router();

router.get("/", getAuthors);
router.get('/:name', getAuthorByName)

export default router;
