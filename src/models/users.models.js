const {DataTypes}=require('sequelize')

const db=require('../utils/database.js')

const Users=db.define('users',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    pasword:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profileImage:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }

})

module.exports=Users