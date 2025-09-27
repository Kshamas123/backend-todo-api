const express = require('express')
const db = require('./db')
const app = express()
const todo_model = require('./models/todo_schema')
app.use(express.json())
const port = 3000

db()

app.get('/todos', async (req, res) => {
    const info_todos = await todo_model.find()
    return res.json({
        details: info_todos
    })
})

app.get('/todos/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const info_todos = await todo_model.findById(id)
    return res.json({
        details: info_todos
    })
})

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { category } = req.body
    console.log(category)
    try {
        const info_todos = await todo_model.updateOne({ _id: id }, { $set: { category: category} })
        return res.json({
            message: "update sucessfully"
        })
    }
    catch (err) {
        return res.json({
            message: err
        })
    }
})

app.delete('/todos/:id',async(req,res)=>{
    const { id }=req.params
    try{
        const r=await todo_model.deleteOne({ _id:id})
     return res.json({
            message: "deleted sucessfully"
        })
    }
    catch (err) {
        return res.json({
            message: err
        })
    }
})

app.post('/todos', async (req, res) => {
    const { title, completion } = req.body;
    try {
        const r = await todo_model.insertOne({
            title: title,
            category: completion
        })
        console.log(r)
        return res.json({
            message: "data inserted sucessfully"
        })
    }
    catch (err) {
        return res.json({
            errormessage: err
        })
    }
})
//code to start server here the server listens to request made by the clients
app.listen(port, () => {
    console.log(`server is running at port : ${port}`)
})