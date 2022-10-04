const uuid = require('uuid')
const usersDB = [
    {
        id:'6c8eee59-41e7-4a13-8a25-a79fadcd46b8',
        first_name: 'David',
        last_name: 'Azcui',
        email: 'david@gmail.com',
        password: '123',
        birthday: '1977/02/21'
    },
    {
        id:'05b73156-3ab3-4a68-b00e-63b5f52b789e',
        first_name: 'Pedro',
        last_name: 'Marmol',
        email: 'pedro@gmail.com',
        password: '1234',
        birthday: '1988/05/16'
    }
]
// para leer todos los usuarios
const getAllUsers = () => {
    return usersDB
}
// para leer un solo usuario
const getUsersId = (id) => {
    const data = usersDB.find(task => task.id === id)
    return data
}
//para crear un usuario
const createUsers = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    usersDB.push(newUser)
    return newUser
}
// exportar
module.exports = {
    getAllUsers,
    getUsersId,
    createUsers

}