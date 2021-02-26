const express = require("express");
const app = express();
const port = 5000;
const config = require("./config/key");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const { auth } = require("./middleware/auth");
const UsersRouter = require("./routers/users");
const VideoRouter = require("./routers/video");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
const mongoose = require("mongoose");
mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.use("/api/users", UsersRouter);
app.use("/api/video", VideoRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
