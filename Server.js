const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const db = mysql.createPool({
    connectionLimit : 10, 
    host : "localhost",
    user : "root",
    password : "",
    database : "vishnustores",
})

app.get('/shop',(req,res)=>{
    db.query('select * from items where available=1',(err,result)=>{
        if(err) console.log(err)
        else{
            res.send(result)
        }
    })
})

app.get('/admin',(req,res)=>{
    db.query('select * from items',(err,result)=>{
        if(err) console.log(err)
        else{
            res.send(result)
        }
    })
})

app.post('/outofstock',(req,res)=>{
    console.log("deleting data...")
    const input = req.body.input;
    console.log(input+" deleting")
    const sql=`delete from items where id=?`
    db.query(sql,[input],(err)=>{
        if(err) console.log(err)
        else{          
            console.log("deleted")
            // res.send("Deleted")
            // res.end()
        }
    })
})

app.post('/removecart',(req,res)=>{
    console.log("deleting data...")
    const input = req.body.input;
    console.log(input+" deleting")
    const sql=`delete from cart where id=?`
    db.query(sql,[input],(err)=>{
        if(err) console.log(err)
        else{          
            console.log("deleted")
            // res.send("Deleted")
            // res.end()
        }
    })
})

app.get('/total',(req,res)=>{
    db.query('select sum(price) as sum from cart',(err,result)=>{
        if(err) console.log(err)
        else{
            res.send(result)
        }
    })
})

app.get('/cartdata',(req,res)=>{
    db.query('select * from cart',(err,result)=>{
        if(err) console.log(err)
        else{
            res.send(result)
        }
    })
})

app.post('/insert',(req,res)=>{
    console.log("getting data.....") 
    const name = req.body.name
    const price = req.body.price
    const img = req.body.img
    const sql = `insert into cart(name,price,img) values(?,?,?)`;
    db.query(sql,[name,price,img],(err)=>{
        if(err) console.log(err)
        else{
            res.send("inserted")
        }
    })
})

app.post('/update',(req,res)=>{
    console.log("deleting data...")
    const input = req.body.input;
    console.log(input+" deleting")
    const sql=`update items set available=1 where id=?`
    db.query(sql,[input],(err)=>{
        if(err) console.log(err)
        else{          
            console.log("deleted")
            // res.send("Deleted")
            // res.end()
        }
    })
})
app.listen(3002, (err)=>{
    if(err) console.log(err) 
    else console.log("Listening") 
})