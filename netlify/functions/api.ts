import express from "express";
import serverless from "serverless-http";
import { apiRouter } from "../../api-router";

const app = express();
app.use(express.json());

// Mount the router at /api so it matches the frontend requests
app.use("/api", apiRouter);

export const handler = serverless(app);
