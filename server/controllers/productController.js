const express = require('express')
const router = express.Router()

const db = require('../database/mySqlConnection.js')

router.post('/create', (req, res) => {
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

router.get('/products', (req, res) => {
    db.query('select * from products', (err, result) =>{
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

router.delete('/products/{name}', (req, res) => {
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