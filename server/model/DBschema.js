const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ToDoSchema = new schema({
    name:String ,
    date:Date ,
    description:String,
    isDone:{type :Boolean , default : false},
    gifUrl :{type: String , default: `https://media0.giphy.com/media/2rKDe8JpAEatWVamEe/giphy.gif?cid=620ab5ccfpw295ydqluxnsejhj2gl5xjhz4te3pscggybtut&rid=giphy.gif&ct=g`}

})

ToDoSchema.pre('remove', function(next) {
    this.model('Users').remove({ todoCards: this._id }, next);
});

const listToDo = mongoose.model('ToDo', ToDoSchema);
module.exports = listToDo;


