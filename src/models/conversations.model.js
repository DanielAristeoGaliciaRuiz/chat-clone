const {DataTypes}=require('sequelize')

const db=require('../utils/database.js')

const Conversations=db.define('conversations',{
    id:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    profileImage:{
        type:DataTypes.STRING,
    },
    idGroup:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})

module.exports=Conversations