const express=require('express');
const cors=require('cors');
const db=require('./db');
const app=express().use(cors(),express.json());

app.post('/users',(req,res)=>{
    db.query('insert into users(name,email) values(?,?)',[req.body.name,req.body.email],
        (err,r)=>res.send({id:r.insertId})
    );
});

app.get('/users',(err,res)=>{
    db.query('select * from users',(err,r)=>res.send(r));
});

app.put('/users/:id',(req,res)=>{
    db.query('update users set name=?,email=? where id=?',[req.body.name,req.body.email,req.params.id],
        ()=>res.send({msg:'updated'})
    );
});

app.delete('/users/:id',(req,res)=>{
    db.query('delete from users where id=?',[req.params.id],
        ()=>res.send({msg:'deleted'})
    );
});

app.listen(5000, () => console.log('Server running'));