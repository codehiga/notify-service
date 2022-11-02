"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var email_1 = require("./email");
var app = (0, express_1["default"])();
var port = process.env.PORT || 8080;
app.use("/email", email_1.emailRoute);
app.listen(port);
