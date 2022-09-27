const mysql = require('mysql')
const con=mysql.createConnection({
    host:"eu-cdbr-west-02.cleardb.net",
    user:"b8f2e893d34d75",
    password:"f7be940d",
    port:3306,
    database:"heroku_22bd106b049707a"
})

// mysql://b8f2e893d34d75:f7be940d@eu-cdbr-west-02.cleardb.net/heroku_22bd106b049707a?reconnect=true

con.connect((error)=>{
    if(!error){
       console.log('db qoshuldu')
    }
})



module.exports= con


