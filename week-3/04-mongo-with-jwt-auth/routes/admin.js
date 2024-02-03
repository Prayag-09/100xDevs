const { Router } = require("express");
const {adminMiddleware} = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
import Admin from '../db/index'

const secret = "secRET";

app.post('/signup',async (req, res) => {
    const {username, password} = req.headers;
    try{
        const exist = await Admin.findOne({username,password});
        if(!exist){
            const newAdmin = await Admin.create({username,password});
            res.status(200).json({newAdmin : newAdmin})
        }
        res.status(500).json({msg : " Admin already exists"})
    } catch(err){
        res.status(500).json(err);
    }
});

app.post('/signin', (req, res) => {
    
});

app.post('/courses', adminMiddleware, (req, res) => {

});

app.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;