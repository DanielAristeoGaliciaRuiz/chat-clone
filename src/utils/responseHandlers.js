
//Para respuestas exitosas

const succes=({status,data,message,res})=>{
    res.status(status).json({
        error:false,
        status:status,
        message:message,
        data:data
    })
} 

//Para respuestas de errores

const error=({status,data,message,res,fields})=>{
    res.status(status).json({
        error:true,
        status:status,
        message:message,
        fields:fields,
        data:data
    }) 
}

module.exports={
    succes,
    error
}