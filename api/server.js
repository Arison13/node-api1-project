// BUILD YOUR SERVER HERE
const express = require ("express")
const Users = require("./users/model")


const server = express()
server.use(express.json())

server.get('/api/users', (req, res)=> {
    Users.find()
    .then(user => {
        res.json(user)
    }).catch(err => {
        res.status(500).json({
             message: "The users information could not be retrieved",
            error: err.message
        })
    })
})


module.exports = server 
