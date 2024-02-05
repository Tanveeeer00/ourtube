import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../controllers/user.update.controller.js";
import { getUserChannelProfile } from "../controllers/subscription.controller.js";
import { getWatchHistory } from "../controllers/user.watchHistory.controller.js";

const updateRouter = Router();

updateRouter.route("/change-password").post(verifyJWT, changeCurrentPassword);
updateRouter.route("/current-user").get(verifyJWT, getCurrentUser);
updateRouter.route("/update-account").patch(verifyJWT, updateAccountDetails);
updateRouter
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
updateRouter
  .route("/cover-image")
  .patch(verifyJWT, upload.single("/coverImage"), updateUserCoverImage);
updateRouter.route("/c/:username").get(verifyJWT, getUserChannelProfile);
updateRouter.route("/history").get(verifyJWT, getWatchHistory);

export default updateRouter;
