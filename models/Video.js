const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        minlength: [5, "Please Enter Your full name"],
        maxlength: [50, "Your name cannot be this long"],
        trim: true
    },
    title:{
        type: String,
        required: [true, "Please provide the title of the video"],
        minlength: [5, "Please Enter Your a detailed title"],
        maxlength: [250, "Your title cannot be this long"]
    },
    description:{
        type: String,
        required: [true, "Please provide the description of the video"],
        minlength: [5, "Please Enter a detailed description"],
        maxlength: [250, "Your description cannot be this long"]
    },
    video:{
        type: String,
        required: [true, "Please upload a video"]
    }   
});

const Video = mongoose.model("Video", videoSchema);

module.exports.Video = Video;

