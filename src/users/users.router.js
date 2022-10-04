const router = require('express').Router()
const userService = require('./users.services')

router.get('/users', userService.getUsers)
router.post('/users', userService.createNewUser)
router.get('/users/:id', userService.getOneUser)

module.exports = router