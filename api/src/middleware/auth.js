/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 */
const authMiddleware = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }

        next();
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = authMiddleware;
