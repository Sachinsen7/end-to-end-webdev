import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));

app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);

app.use(cookieParser());

app.use(express.static("public"));

//import routes

import healthCheckRoutes from "./routes/healthcheck.routes.js";
import userRouter from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

//routes

app.use("/api/v1/healthcheck", healthCheckRoutes);
app.use("/api/v1/users", userRouter);

app.use(errorHandler);

export { app };
