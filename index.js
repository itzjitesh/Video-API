const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const video = require("./routes/videoRoutes");

require("./server")();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use("/uploads", express.static('uploads')); //try to see where it can be applied
app.use("/api/v1", video);

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
});

