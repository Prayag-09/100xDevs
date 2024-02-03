import User from '../db/index';

async function userMiddleware(req, res, next) {
    const { username, password } = req.headers;
    try {
        const user = await User.findOne({ username, password });

        if (user) {
            next();
        } else {
            res.status(403).json({ message: "User doesn't exist" });
        }
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = userMiddleware;