const usersControllers=require('./users.controllers.js')
const responseHandlers=require('../utils/responseHandlers.js')


const getAllUsers = (req,res)=>{
    usersControllers.findAllUsers()
    .then(data=>{
        responseHandlers.succes({
            status:200,
            data,
            message:'All users colected succesfully',
            res
        })
    })
    .catch(err=>{
        responseHandlers.error({
            status:400,
            data:err,
        })
    })
}

const getUserById = (req,res)=>{
    usersControllers.findUserById(id)
    .then(data=>{
        if(data){
            responseHandlers.succes({
                status:200,
                data,
                message:'User colected succesfully',
                res
            })
        }else{
            responseHandlers.error({
                status:404,
                data:err,
                message:'Invalid Id'
            })
        }
    })
    .catch(err=>{
        responseHandlers.error({
            status:400,
            data:err,
            message:'Something bad getting the user',
            res
        })
    })
}

const postNewUser=(req,res)=>{
    const userObj=req.body
    usersControllers.createNewUser(userObj)
    .then(data=>{
        responseHandlers.succes({
            status:201,
            data,
            message:'User created succesfully',
            res
        })
    })
    .catch(err=>{
        responseHandlers.error({
            status:404,
            data:err,
            message:'The user was not created',
            fields: {
                firstName : 'String',
                lastName : 'String',
                email: 'example@example.com',
                password: 'String',
                profileImage: 'example.com/image.png',
                phone : '+52 1234 123 123'
            }
        })
    })
}

const deleteUser=(req,res)=>{
    usersControllers.deleteUser(id)
    .then(data=>{

        if(data){
            responseHandlers.succes({
                status:200,
                data,
                message:'User deleted succesfully',
                res,
            })
        }else{
            responseHandlers.error({
                status:404,
                message:'Id not founded'
            })
        }
    })
    .catch(err=>{
        responseHandlers.error({
            status:400,
            data:err
        })
    })
}

const patchUser=(req,res)=>{
    const id=req.params.id
    const userObj=req.body

    usersControllers.upDateUser(id,userObj)
    .then(data=>{
        if(data){
            responseHandlers.succes({
                status:202,
                data,
                message: `User whit id:${id} updated succesfully`,
                res
            })
        }else{
            responseHandlers.error({
                status:404,
                message:'User not found',
                fields: {
                    firstName : 'String',
                    lastName : 'String',
                    email: 'example@example.com',
                    password: 'String',
                    profileImage: 'example.com/image.png',
                    phone : '+52 1234 123 123'
                }
            })
        }
    })
    .catch(err=>{
        responseHandlers.error({
            status:400,
            data:err
        })
    })
}

// const putUser = (req,res)=>{
//     const id=req.params.id
//     const userObj=req.body

//     if(!userObj.firstName || !userObj.lastName || !userObj.email || !userObj.password || !userObj.phone){
//         return responseHandlers.error({
//             status:404,
//             message:'Missing Data',
//             fields:{
//                 firstName:'Alejandro',
//                 lastName:'Marcovich',
//                 email:'ale@gmail.com',
//                 password:'*********',
//                 profileImage:'',
//                 phone:'9861341825'
//             }
//         })
//     }
//     usersControllers.upDateUser(id,userObj)
//     .then(data=>{
//         if(data){
//             responseHandlers.succes({
//                 status:202,
//                 data,
//                 message: `User whit id:${id} updated succesfully`,
//                 res
//             })
//         }else{
//             responseHandlers.error({
//                 status:404,
//                 message:'User not found'
//             })
//         }
//     })
//     .catch(err=>{
//         responseHandlers.error({
//             status:400,
//             data:err
//         })
//     })
// }

module.exports={
    getAllUsers,
    getUserById,
    deleteUser,
    patchUser,
    postNewUser,
    // putUser
}