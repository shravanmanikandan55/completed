import express from "express";
import serverless from "serverless-http";
import { apiRouter } from "../../api-router";

const app = express();

app.use(express.json());

// Mount the router at /api so it matches the frontend fetch calls
// when Netlify redirects /api/* to /.netlify/functions/api/*
app.use("/api", apiRouter);

export const handler = serverless(app);
