const Users=require('../models/users.models.js')

const findAllUsers= async()=>{
    const data=await Users.findAll({})
    return data
}

const findUserById = async(id)=>{
    const data = await Users.findOne({
        where:{
            id:id
        }
    })
    return data
}

const deleteUser = async(id)=>{
    const data = await Users.destroy({
        where:{
            id:id
        }
    })
    return data
}

const upDateUser = async(id,userObj)=>{
    const data = await Users.update(userObj,{
        where:{
            id:id
        }
    })
    return data
}

const createNewUser = async(userObj)=>{
    const newUser={
        firstName:userObj.firstName,
        lastName:userObj.lastName,
        email:userObj.email,
        password:userObj.password,
        profileImage:userObj.profileImage,
        phone:userObj.phone
    }
    const data = await Users.create(newUser)
    return data
}

module.exports={
    findAllUsers,
    findUserById,
    deleteUser,
    upDateUser,
    createNewUser
}