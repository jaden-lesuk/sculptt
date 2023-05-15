import { Request, Response, NextFunction } from "express";

interface errorHandlerInterface {
    req: Request,
    res: Response,
    next: NextFunction,
    err: Error
}

export const errorHandler = ( params: errorHandlerInterface ) => {
    const {req, res, next, err} = params;
    const statusCode = res.statusCode ? res.statusCode: 500;

    res.status(statusCode);

    res.json({
        message: err?.message,
        stack: process.env.NODE_ENV === "production" ? null : err?.stack, 
    })
}