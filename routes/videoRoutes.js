const videoControllers = require("../controllers/videoControllers");
const express = require("express");
const upload = require("../middleware/videoUpload");

const router = express.Router();

router.post("/upload/video",upload.single("video"), videoControllers.videoUpload);
router.get("/watch/video/:id", videoControllers.getVideo);

module.exports = router;