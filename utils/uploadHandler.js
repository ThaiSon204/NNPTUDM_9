const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploadImage = multer({ storage: storage });
const uploadExcel = multer({ storage: storage }); // Thêm uploadExcel

module.exports = { uploadImage, uploadExcel };