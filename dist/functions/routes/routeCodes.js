// cloud actions
const express = require("express");
const errors = require("./src/errors");
const admin = require('firebase-admin');

// IMPORTS

const routeCodes = express.Router();
// INASELIZE

routeCodes.post("/sendCode/:countryCode", (req, res) => { // Route for ...
if(!req.params.countryCode || !req.body.type){
    res.json({
        success: false,
        status: 200, //http
        code: errors.Forbidden, //route
        data: null,
        info: "Please post valid data"
    });
}else{
        const collectionID = "access";
        const docID = req.body.type;
        const x = admin.firestore().collection(collectionID).doc(docID);
        x.get().then(ref => {
            const data = ref.exists ? ref.data() : null;
            //return data;
            // console.log(data)
            if(!data){
                res.json({
                    success: false,
                    status: 200, //http
                    code: errors.Forbidden, //route
                    data: null,
                    info: "Please post valid data"
                });
            }else{
                const currentCode = data.now;
                const newCode = getCode(currentCode);
                x.update({
                    now: newCode,
                    count:admin.firestore.FieldValue.increment(+1),
                    upd:admin.firestore.Timestamp(),
                }).then(() => {
                    res.json({
                        success: true,
                        status: 200, //http
                        data: {code: currentCode}
                    });
                }).catch(err => {
                    res.json({
                        success: false,
                        status: 200, //http
                        code: errors.Forbidden, //route
                        data: null,
                        info: err
                    });
                })
            }
        })
        //.set(quoteData).then(() => console.log('new Dialogue written to database')); 
}
})

/*
routeCodes.post("/sendCodes/:countryCode", (req, res) => { // Route for ...
    if (!req.params.countryCode || !req.body.currentCode) {
        res.json({
            success: false,
            status: 200, //http
            code: errors.Forbidden, //route
            data: null,
            info: "Please post valid data"
        });
    } else {


        if (req.body.currentCode.length !== 6) {
            res.json({
                success: false,
                status: 200, //http
                code: errors.BadRequest, //route
                data: null,
                info: "Please post valid code"
            });
        } else {
            // +c1 & set c2 = A// +c2 & set c3 = A// +c3 & set c4 = A// +c4 & set c5 = A
            const newCode = getCode(req.body.currentCode);
            // Update Code to server here
            // Update Code to server here

            if (!newCode) {
                res.json({
                    success: false,
                    status: 200, //http
                    code: errors.Conflict, //route
                    data: null,
                    info: "Hex Limit for Code Reached!"
                });
            } else {
                res.json({
                    success: true,
                    status: 200,
                    code: errors.ok,
                    data: {
                        currentCode: req.body.currentCode,
                        code: newCode,
                        timestamp: Date.now()
                    },
                    info: "Hello action"
                });
            }

        }
    }
});
*/

function getCode(nowCode) {
    const alfhaNumeric = [
        "0",
        "1", "2",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "3", "4", "5", "6",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "7", "8",
        "9"
    ];

    const c0 = nowCode[0];
    const c1 = nowCode[1];
    const c2 = nowCode[2];
    const c3 = nowCode[3];
    const c4 = nowCode[4];
    const c5 = nowCode[5];
    console.log(c0, c1, c2, c3, c4, c5,
        "currentCode", nowCode)

    if (
        c5 == "9" ||
        c5 == "9" && c4 == "9" ||
        c5 == "9" && c4 == "9" && c3 == "9" ||
        c5 == "9" && c4 == "9" && c3 == "9" && c2 == "9" ||
        c5 == "9" && c4 == "9" && c3 == "9" && c2 == "9" && c1 == "9" ||
        c5 == "9" && c4 == "9" && c3 == "9" && c2 == "9" && c1 == "9" && c0 == "9"
    ) {

        if (c5 == "9" && c4 !== "9" /*&& c3 !== "9" && c2 !== "9" && c1 !== "9" && c0 !== "9"*/ ) {
            const i5 = alfhaNumeric[0];
            const i4 = alfhaNumeric.indexOf(c4);
            return c0 + c1 + c2 + c3 + (alfhaNumeric[i4 + 1]) + i5;
        } else {
            if (c4 == "9" && c3 !== "9" /*&& c2 !== "9" && c1 !== "9" && c0 !== "9"*/ ) {
                const i5 = alfhaNumeric[0];
                const i4 = alfhaNumeric[0];
                const i3 = alfhaNumeric.indexOf(c3);
                return c0 + c1 + c2 + (alfhaNumeric[i3 + 1]) + i4 + i5;
            } else {
                if (c3 == "9" && c2 !== "9" /*&& c1 !== "9" && c0 !== "9"*/ ) {
                    const i5 = alfhaNumeric[0];
                    const i4 = alfhaNumeric[0];
                    const i3 = alfhaNumeric[0];
                    const i2 = alfhaNumeric.indexOf(c2);
                    return c0 + c1 + (alfhaNumeric[i2 + 1]) + i3 + i4 + i5;
                } else {
                    if (c2 == "9" && c1 !== "9" /*&& c0 !== "9"*/ ) {
                        const i5 = alfhaNumeric[0];
                        const i4 = alfhaNumeric[0];
                        const i3 = alfhaNumeric[0];
                        const i2 = alfhaNumeric[0];
                        const i1 = alfhaNumeric.indexOf(c1);
                        return c0 + (alfhaNumeric[i1 + 1]) + i2 + i3 + i4 + i5;
                    } else {
                        if (c1 == "9" && c0 !== "9") {
                            const i5 = alfhaNumeric[0];
                            const i4 = alfhaNumeric[0];
                            const i3 = alfhaNumeric[0];
                            const i2 = alfhaNumeric[0];
                            const i1 = alfhaNumeric[0];
                            const i0 = alfhaNumeric.indexOf(c0);
                            return (alfhaNumeric[i0 + 1]) + i1 + i2 + i3 + i4 + i5;
                        } else { // LIMIT REACHED
                            // Please change 62 Hex Root
                            return ""
                                // Please change 62 Hex Root
                        }
                    }
                }
            }
        }
    } else {
        const i5 = alfhaNumeric.indexOf(c5); //"1" + 
        console.log("i5: " + i5)
        return "" + c0 + c1 + c2 + c3 + c4 + (alfhaNumeric[i5 + 1]); //alfhaNumeric[i5 + 1]
    }
}

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