"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (params) => {
    const { req, res, next, err } = params;
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err === null || err === void 0 ? void 0 : err.message,
        stack: process.env.NODE_ENV === "production" ? null : err === null || err === void 0 ? void 0 : err.stack,
    });
};
exports.errorHandler = errorHandler;
