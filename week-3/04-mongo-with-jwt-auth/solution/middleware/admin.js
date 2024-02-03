import { jwt } from "jsonwebtoken";
import { JWT_SECRET } from "../config";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const auth = req.headers.authorization; // bearer token
    const words = token.split(" "); // ["Bearer", "token"]
    const token = words[1]; // token
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
    
}

export default adminMiddleware;