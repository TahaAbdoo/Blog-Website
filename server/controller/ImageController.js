const ImageModel = require('../model/ImageModel');



exports.upload = async (req, res) => {

    const imageDoc = await ImageModel.create({
        path: req.file.path.replace(/\\/g, "/")
    }).then((data) => {

    res.json({
        data: imageDoc
    })
}).catch ((err) => {
    console.log(err);
})
}



exports.getallimages = async (req, res) => {
    const images = await ImageModel.find();
    res.json({
        data: images,
        state: 1,
        msg: ""
    });
}