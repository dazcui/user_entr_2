const express = require('express')
const app = express()
const usersRouter = require('./src/users/users.router')
app.use(express.json())



app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server OK!' })
})

app.use("/", usersRouter)

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
// })
app.listen(9000, () => {
    console.log('Serve started at port 9000');
})