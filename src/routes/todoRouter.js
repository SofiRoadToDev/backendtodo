const express=require('express')
const router=express.Router()
const db=require('../../models')
const { getAllToDo, createNewToDo, deleteToDo, updateToDo } = require('./controllers/todoController')
const multer=require('multer')

var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});


const upload=multer({storage:storage})


router.get('/',getAllToDo)

router.post('/',upload.single('file'),createNewToDo)

router.delete('/:id',deleteToDo)

router.put('/:id',updateToDo)



module.exports=router