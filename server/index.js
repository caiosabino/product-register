const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'admin',
    database: 'PRODUCT_REGISTER_DB'
})

app.post('/create', (req, res) => {
    const product_name = req.body.product_name
    const product_price = req.body.product_price

    db.query('insert into products (product_name,product_price) values (?,?)', [product_name, product_price], (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send('Values Inserted')
        }
    })
})

app.get('/products', (req, res) => {
    db.query('select * from products', (err, result) =>{
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.delete('/products/{name}', (req, res) => {
    db.query('select * from products where product_name = ?', [name], (err, result) =>{
        
    })
    db.query('delete from products where id = ?', [], (err, result) =>{
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


app.listen(3001, () => console.log("Server is runing on port 3001"))