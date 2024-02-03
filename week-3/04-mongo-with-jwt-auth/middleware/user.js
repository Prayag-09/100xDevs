import User from '../db/index'
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username , password} = req.headers;
    try{
        const exist = await User.findOne({username, password});
        if(exist){
            res.statsu(500).json({message : "User found !!"});
        } else {
            res.statsu(500).json({message : "User doesn't exist"});
        }
    } catch(err){
        res.status(403).send(err);
    }
}

module.exports = userMiddleware;