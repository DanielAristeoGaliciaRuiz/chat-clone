const Participants=require('./participants.models')
const Users=require('./users.models')
const Messages=require('./messages.models')
const Conversations=require('./conversations.model')


const initModels=()=>{

    // Products.belongsTo(Categories)
    // Categories.hasMany(Products)

    Participants.belongsTo(Users)
    Users.hasMany(Participants)

    Messages.belongsTo(Participants)
    Participants.hasMany(Messages)

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
}

module.exports=initModels