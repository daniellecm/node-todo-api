const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

//var id = "5c34d6e69f933607584da35c"
var id = "5c34bd1d6cf85c07248a9060"

if(!ObjectID.isValid(id)){
    return console.log('ID not valid')
}

/*
Todo.find({
    _id : id
}).then((todos) => {
    if(todos.length === 0){
        return console.log('Nothing found')
    }
    console.log(todos)
}).catch((e) => console.log(e))

Todo.findOne({
    _id : id
}).then((todo) => {
    if(!todo){
        return console.log('Not found')
    }
    console.log(todo)
}).catch((e) => console.log(e))

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Not found')
    }
    console.log(todo)
}).catch((e) => console.log(e))
*/

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found')
    }
    console.log(user)
}).catch((e) => console.log(e))