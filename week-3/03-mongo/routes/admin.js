const { Admin, Course } = require('../db');
const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

router.use(adminMiddleware());

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const newObj = { username, password };

    await Admin.create(newObj);

    res.status(201).json({ message: 'New Admin created successfully' });
});

router.post('/courses', async (req, res) => {
    const { title, description, imageLink, price } = req.body;
    const newObj = { title, description, imageLink, price };
    const newCourse = await Course.create(newObj);

    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
    });
});

router.get('/courses', async (req, res) => {
    const allCourse = await Course.find({});
    res.json({ message: 'All Courses found', courses: allCourse });
});

module.exports = router;