import { Router } from "express";
import authRouter from "../routes/authRoutes";
import courseRouter from "../routes/courseRoutes";
import tagRouter from "../routes/tagRoutes";
import userRouter from "../routes/userRoutes";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/courses", courseRouter);
apiRouter.use("/tags", tagRouter);
apiRouter.use("/users", userRouter);

export default apiRouter;
