import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// common middlewares

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);
app.use(cookieParser());

app.use(express.urlencoded({ extended: true, limits: "16kb" }));
app.use(express.static("public")); // securing my application => you can add css images

//import routes

import healthcheckroutes from "./routes/healthcheck.routes.js";
import userRouter from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/err.middlewares.js";

//routes

app.use("/api/v1/healthcheck", healthcheckroutes);
app.use("/api/v1/users", userRouter);
app.use(errorHandler);

export { app };
