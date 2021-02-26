const express = require("express");
const router = express.Router();
// const { Video } = require("../models/Video");
const { auth } = require("../middleware/auth");
const multer = require("multer");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        console.log(`upload ext name : ${ext}`);
        if (ext !== ".mp4") {
            console.log("ererererere");
            return cb(
                res.status(400).end("only jpg, png, mp4 is allowed"),
                false
            );
        }
    },
});

const upload = multer({ storage: storage }).single("file");

router.post("/uploadfiles", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({
            success: true,
            url: res.req.file.path,
            fileName: res.req.file.filename,
        });
    });
});

module.exports = router;
