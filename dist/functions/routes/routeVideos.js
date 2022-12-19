// cloud actions
const express = require("express");
const errors = require("./src/errors");
const admin = require('firebase-admin');

// IMPORTS

const routeCodes = express.Router();
// INASELIZE

routeCodes.post("/create-video/:countryCode", (req, res) => { // Route for ...
if(!req.params.countryCode || !req.body.video){
    res.json({
        success: false,
        status: 200, //http
        code: errors.Forbidden, //route
        data: null,
        info: "Please post valid data"
    });
}else{
    res.json({ success: true, data: [
        "assets/video/previewImgs/preview1.jpg",
        "assets/video/previewImgs/preview2.jpg",
        "assets/video/previewImgs/preview3.jpg",
      ] });
}
})


routeCodes.get("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Get Call" });
});
routeCodes.post("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Post Call" });
});
routeCodes.put("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Put Call" });
});
routeCodes.delete("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Delete Call" });
});



module.exports = routeCodes;