"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// routing
app.get("/", (req, res) => {
    res.send(`Express Typescript`);
});
app.use(errorMiddleware_1.errorHandler);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on port: ${port}`);
});
