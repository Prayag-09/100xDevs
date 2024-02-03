const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {adminRouter, userRouter} = require("./routes")
const {adminMiddleware, userMiddleware} = require('./middleware');
const PORT = 3000;


// Middleware for parsing request bodies
app.use(adminMiddleware());
app.use(userMiddleware());
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
