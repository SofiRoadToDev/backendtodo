
 const db= require ('../../../models')
 

    getAllToDo = (req,res)=>{
        {db.ToDO.findAll()
            .then(t=>res.status(200).json(t))
            .catch(e=>res.status(500).json({error:e.message}))}  
    }

    createNewToDo=async (req,res,next)=>{
       
        try {        
            const {title,description,completed}=req.body; 
            const {HOSTNAME,PORT}=process.env
            let image=`${HOSTNAME}:${PORT}/api/${req.file.originalname}`
            if(title==undefined || title=='')
            throw new Error('El titulo es obligatorio')
            const created= await db.ToDO.create({title,description,completed,image})
            res.status(201).json(created)
        } catch (error) {
            res.status(500).json('error: '+error.message)
        }
    }

    deleteToDo=(req,res)=>{   
        db.ToDO.destroy({where:{id:req.params.id}})
            .then(r=>res.status(201).send('Filas afectadas: '+r))
            .catch(e=>res.status(500).send('Ha ocurrido un error: '+e.message))
    }

    updateToDo=(req,res)=>{
        const {title,description,completed}=req.body;
        db.ToDO.update({
            title,
            description,
            completed
        }
        ,
        { where:{id:req.params.id}})
        .then(r=>res.status(200).send('Actualizacion correcta, filas: '+r))
        .catch(e=>res.status(500).send('Error: '+e.message))
        
    }


module.exports={
    getAllToDo,
    createNewToDo,
    deleteToDo,
    updateToDo
}

   



 
 