import Router from "express";
import userController from "../controllers/users-controller";
import { body } from "express-validator";
// import authMiddleware from "../middlewares/auth-middleware";

const authRouter = Router();

authRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({
    min: 3,
    max: 30,
  }),
  userController.registration
);
authRouter.post("/login", userController.login);
authRouter.post("/logout", userController.logout);
authRouter.get("/activate/:link", userController.activate);
authRouter.get("/refresh", userController.refresh);
authRouter.get("/users", userController.getUsers);
authRouter.post("/registration", userController.registration);
// authRouter.get("/registration", userController.registration);

export default authRouter;
