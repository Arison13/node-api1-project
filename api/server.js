// BUILD YOUR SERVER HERE
const express = require ("express")
const Users = require("./users/model")


const server = express()
server.use(express.json())


//[GET]s all users
server.get('/api/users', (req, res)=> {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
             message: "The users information could not be retrieved",
            error: err.message
        })
    })
})

//[GET]s users by id 
server.get('/api/users/:id', (req, res)=> {
    Users.findById(req.params.id)
    .then(user => {
        if(!user){
            res.status(404).json({
                message: "The user with the specified ID does not exist"
            })
        }
        res.json(user)

    })
    .catch(err => {
        res.status(500).json({
             message: "The user information could not be retrieved",
            error: err.message
        })
    })
})

module.exports = server 
