
import Admin from '../db/index'
async function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;
    try {
        const user = await Admin.findOne({ username, password });

        if (user) {
            next();
        } else {
            res.status(403).json({ message: "Admin doesn't exist" });
        }
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = adminMiddleware;