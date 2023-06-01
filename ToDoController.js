const ToDoModel = require('./ToDoModel');

module.exports.getToDo = async (req,res) => {
    const myToDo = await ToDoModel.find();
    res.send(myToDo)
}

module.exports.saveToDo = async (req,res) => {
    const { title } = req.body;
    ToDoModel.create({ title })
    .then((data) => { console.log('ToDo added')
    res.send(data)
    })
}

module.exports.deleteToDo = async (req,res) => {
    const {_id} = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a task'))
}

module.exports.editToDo = async (req,res) => {
    const {_id, title} = req.body;
    ToDoModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a task'))
}

