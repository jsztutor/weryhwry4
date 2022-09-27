const conn = require('../db.js')

// get all category
const getAllcat = (req,res)=>{
    
    
    conn.query("select * from category",(error,data)=>{ 
        if(!error){
            res.json(data)
            return 
        }
        res.send("xeta bash verdi")
     })

  }

module.exports={
    getAllcat

}