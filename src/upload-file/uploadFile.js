const multer = require('multer')

var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'static')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname+'_'+Date.now())
    }
});

const upload=multer({storage:storage})


module.exports ={upload,storage}