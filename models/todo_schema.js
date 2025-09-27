// Filename - app.js

const {Schema,model} = require('mongoose');


const todo_schema = new Schema({
    title: {
        type: String,
        require: true
    },
    category: {
    type: String,
    default: "marked to do"
    }
})

const todo_model = model('TODO', todo_schema);

module.exports=todo_model