const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ObjectId = mongoose.ObjectId


const UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
})


const TodoSchema = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('User', UserSchema)
const TodoModel = mongoose.model('Todo', TodoSchema)

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}