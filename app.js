const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fseletro'
})

app.get('/', (req, res) => {
    db.query("SELECT * FROM produtos", (error, results) => {
        console.log(error, results)
        res.json(results)
    })
})

app.get('/pedidos', (req, res) => {
    db.query("SELECT * FROM pedidos", (error, results) => {
        res.json(results)
    })
})

app.listen(3001, () => {
    console.log('Server running')
})