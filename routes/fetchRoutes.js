import express from 'express';
const router = express.Router();
import path from 'path';

import {
  getHome,
  getRandomContent,
  getNewQuote,
  getNewDogImage
} from "../controllers/userController.js";

// Web Routes
router.get("/", getHome);
router.get("/index", getRandomContent);

// API Routes
router.get("/api/quote", getNewQuote);
router.get("/api/dog-image", getNewDogImage);

export default router;