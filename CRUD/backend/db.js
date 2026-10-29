const mysql=require("mysql");
const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'crud_app'
});
db.connect();
module.exports=db;