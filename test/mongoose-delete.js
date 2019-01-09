const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = "5c35ead545b8710ee0dcb564"

/*
Todo.remove({}).then((result) => {
    console.log(result)
})

Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
        return console.log('Document not found')
    }
    console.log(todo)
}).catch((e) => console.log(e))
*/

Todo.findByIdAndDelete(id).then((todo) => {
    if(!todo){
        return console.log('Document not found')
    }
    console.log(todo)
}).catch((e) => console.log(e))