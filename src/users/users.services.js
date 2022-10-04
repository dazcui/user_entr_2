const {restart} = require('nodemon')
const { getAllUsers, getUsersId, createUsers} = require('./users.controllers')

//el usuario visualiza toda de DB
const getUsers = (req,res)=>{
    const data = getAllUsers()
    res.status(200).json(data)
}

// el usuario pueda visualizar un solo usuario
const getOneUser = (req,res)=>{
    const id = req.params.id
    const data = getUsersId(id)
    if (data) {
        res.status(200).json(data)
    }else{
        res.status(404).json({id:id, message:'Invalid ID'})
    }
}

// para crear un usuario
const createNewUser = (req,res)=>{
    const {first_name, last_name, email, password, birthday} = req.body
    if (first_name && last_name && email && password && birthday) {
        const data = createUsers(first_name, last_name, email, password, birthday)
        res.status(201).json(data)
    }else{
        res.status(400).json({message:'Missing Data'})
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createNewUser
}