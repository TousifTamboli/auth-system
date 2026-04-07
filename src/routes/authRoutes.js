import express from "express";
import { signup, login, refresh } from "../controllers/authController.js";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.status(405).json({
    message: "Method Not Allowed. Use POST /api/auth/signup for registration.",
  });
});

router.post("/signup", signup);

router.get("/login", (req, res) => {
  res.status(405).json({
    message: "Method Not Allowed. Use POST /api/auth/login for login.",
  });
});

router.post("/login", login);
router.post("/refresh", refresh);

export default router;
