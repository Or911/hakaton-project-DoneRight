const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    username: { type: String, required: true } ,
    password: { type: String, required: true } , 
    todoCards: [{ type: schema.Types.ObjectId, ref: "ToDo" }] ,
})

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;