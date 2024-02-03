const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
import { User,Course } from "../db";

app.post('/signup',async (req, res) => {

    const {username,password} = req.body;
    const newObj = {username,password};
    const exists = await User.find({username});
    if(!exists){
        await User.create(newObj);
        res.json({message:"New User created succesfully"})
    }
    res.json({message:"User already exists"})

});

app.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find({});
    res.json({message: 'All Courses found', courses: allCourse })
});

app.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const course = await Course.findById(req.params.courseId);
    res.json({message: 'Courses found',course })
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
module.exports = router;