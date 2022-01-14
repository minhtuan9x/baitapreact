const student = require("../models/student")
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    student.find(req.query,function (err, data) {
        res.json(data);
    })
});
router.post('/', (req, res) => {
    student.create(req.body, function (err, data) {
        if (err) throw err;
        res.status(200).redirect("http://localhost:3000/")
    })
});
router.delete('/:id', (req, res) => {
    console.log("xoa");
    student.findByIdAndDelete(req.params.id, function (err, data) {
        if (err) throw err;
        res.status(200).json("oke");
    })
});
router.put('/:id', (req, res) => {
    console.log("sua");
    student.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        if (err) throw err;
        res.status(200).json("oke");
    })

});

module.exports = router;
