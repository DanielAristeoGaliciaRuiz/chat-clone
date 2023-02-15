const express=require('express')

const responseHandlers=require('./utils/responseHandlers.js')
const db=require('./utils/database.js')
const initModels=require('./models/initModels.js')

const userRouter=require('./users/users.router.js')

const app=express()
app.use(express.json())

db.authenticate()
.then(()=>{
    console.log('Credenciales de bases de datos correctas')
})
.catch(err=>{
    console.log(err)
})

db.sync()
.then(()=>{
    console.log('Base de datos sincronizada correctamente')
})
.catch(err=>{
    console.log(err)
})

initModels()

app.get('/',(req,res)=>{
    responseHandlers.succes({
        res,
        status:200,
        message:'Servidor inicializado correctamente',
        data:{
            "users":"http://localhost:9000/api/v1/users",
            "conversations":"http://localhost:9000/api/v1/conversations"
        }
    })
})

app.use('/api/v1/users',userRouter)

//Esta ruta debe estar al final

app.use('*',(req,res)=>{
    responseHandlers.error({
        res,status:404,
        message:'URL not found, please try with: http://localhost:9000'
    })
})

app.listen(9000,()=>{
    console.log('Servidor inicializado correctamente')
})