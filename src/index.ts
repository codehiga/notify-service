import express from "express";
import { emailRoute } from "./email";
const app = express();
const port = process.env.PORT || 8080;

app.use("/email", emailRoute);

app.listen(port);
