"use strict";
exports.__esModule = true;
var authMiddleware = function (req, res, next) {
    var _a;
    try {
        if (!req.user) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        next();
    }
    catch (err) {
        return res.status(500).json({
            message: (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'Internal Server Error'
        });
    }
};
exports["default"] = authMiddleware;
