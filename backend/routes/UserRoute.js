import express from "express";
import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  forgotPassword,
  resetPassword,
} from "../controllers/User.js";
import { verifyUser, adminOnly, unauthorizedGuest } from "../middleware/AuthUser.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again later after 1 minutes",
});

router.get("/", verifyUser, adminOnly, unauthorizedGuest, getAllUsers);
router.get("/:uuid", verifyUser, adminOnly, unauthorizedGuest, getUserById);
router.post("/", limiter, createUser);
router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:token", resetPassword);
router.patch("/:uuid", verifyUser, updateUser);
router.delete("/:uuid", verifyUser, adminOnly, unauthorizedGuest, deleteUser);


export default router;
