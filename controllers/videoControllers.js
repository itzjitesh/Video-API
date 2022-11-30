const {Video} = require("../models/Video");

exports.videoUpload = async(req, res) =>{

    const addVideo = new Video({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
    });
    if (req.file){
        addVideo.video = req.file.path
    }

    addVideo.save()
        .then((result)=>{
            res.json({
                message: "Video added successfully",
                result: result
            })
        })
        .catch(error=>{
            res.json({
                message: "Video has not been added successfully", 
                error: error
            })
        });

};

exports.getVideo = async(req, res)=>{

    const video = await Video.findById(req.params.id);
    if (!video) return res.status(400).send("No video available");

    res.send(video);
}