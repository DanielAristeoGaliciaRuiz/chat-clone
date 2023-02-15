const {DataTypes}=require('sequelize')

const db=require('../utils/database.js')
const Participants=require('./participants.models.js')

const Messages=db.define('messages',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    participantId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model: Participants,
            key:'id'
        }
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'sent'
    }    
})

module.exports=Messages