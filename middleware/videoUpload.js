const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/"); //folder in which our videos will be saved
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext) //here the name of the uploaded video has to be uniqure so here I have take time to set the name
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        if(
            file.mimetype == "video/mp4" || //if we want we can add other formats as well
            file.mimetype == "video/mkv"
        ){
            cb(null, true)
        }else{
            console.log("Only mp4 & mkv format supported");
            cb(null, false);
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 20 //size of uploaded video(20mb)
    }
})

module.exports = upload;