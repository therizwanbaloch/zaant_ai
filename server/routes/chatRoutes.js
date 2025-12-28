import express from "express";
import { chatHandler } from "../controllers/chatController.js";
import { chatRateLimiter } from "../middlewares/rate-limit.js";
import { sanitizeInput } from "../middlewares/sanitize.js";
import { verifyAuth } from "../middlewares/auth.js";

const chatRouter = express.Router();

chatRouter.post(
  "/",
  chatRateLimiter,
  verifyAuth,
  sanitizeInput,
  chatHandler
);

export default chatRouter;
