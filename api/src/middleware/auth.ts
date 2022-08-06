import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }

        next();
    } catch (err: Error | any) {
        return res.status(500).json({
            message: err?.message ?? 'Internal Server Error',
        });
    }
};

export default authMiddleware;
