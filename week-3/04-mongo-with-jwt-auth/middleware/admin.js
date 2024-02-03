import jwt from 'jsonwebtoken'
async function adminMiddleware(req, res, next) {
    
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1]; // Takes the token
    try {
        if(token){
            jwt.verify(toke,secret){}
        }
    } catch(err){
        console.log(err) 
    }
}
module.exports = adminMiddleware;