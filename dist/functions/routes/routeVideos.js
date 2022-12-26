// cloud actions
const express = require("express");
const errors = require("./src/errors");
const admin = require('firebase-admin');

const ffmpeg = require('fluent-ffmpeg');
const UUID = require("uuid-v4");

// IMPORTS

const routeVideos = express.Router();
// INASELIZE

routeVideos.post("/create-video/:countryCode", (req, res) => { // Route for ...
if(!req.params.countryCode || !req.body.uid || !req.body.id || !req.body.video || !req.body.video.includes('https://') || !req.body.video.includes('.mp4') ){
    res.json({
        success: false,
        status: 200, //http
        code: errors.Forbidden, //route
        data: null,
        info: "Please post valid data"
    });
}else{
    //res.json({ success: true, info: req.body.uid });
            
    try{
        const control = ffmpeg(req.body.video)
        .on('filenames',(filenames) => {
            console.log('Will generate ' + filenames.join(', '))
        }).on('end', async () => {
            const files = [];
            let id = Date.now();
            // console.log('Screenshots taken');
            
            for (let i = 0; i < control._outputs.length; i++) {
                const filename = control._outputs[i].target;
                var bucket = admin.storage().bucket();
                let upTO =`screenshots/${req.body.uid}/${id + '_' + i }.png`;
                let okX = UUID;
                let ok = okX();
                // Uploads a local file to the bucket
                await bucket.upload(filename, {
                    destination:upTO, //uploadType: "media",
                    // gzip: true,  
                    metadata: {
                        contentType: 'image/png',
                        // This line is very important. It's to create a download token.
                        metadata: {
                            firebaseStorageDownloadTokens: ok
                        }
                //   cacheControl: 'public, max-age=31536000',
                    },
                }).then(() => {
                    let d = "https://firebasestorage.googleapis.com/v0/b/islesys-79de1.appspot.com/o/" + encodeURIComponent(upTO) + "?alt=media&token=" + ok;
                    files.push(d)

                    if((i+1) == control._outputs.length){
                        return admin.firestore().doc('postsFrycoldTempVIDEO/' + req.body.id).update({
                            snaps:files, doneSnaps: true
                        }).then(() => {
                            console.log("DONE")
                        }).catch(e => {
                            res.json({ success: false, info: e });
                        });
                    }
                }).catch(e => {
                    res.json({ success: false, info: e });
                });
            }

        }).screenshots({
            // Will take screens at 20%, 40%, 60% and 80% of the video
            count: 5,
            folder: '/tmp'
        });

        res.json({ success: true });
    }catch(e){
        res.json({ success: false, info: e });
    }
}
})


routeVideos.get("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Get Call" });
});
routeVideos.post("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Post Call" });
});
routeVideos.put("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Put Call" });
});
routeVideos.delete("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Delete Call" });
});



module.exports = routeVideos;