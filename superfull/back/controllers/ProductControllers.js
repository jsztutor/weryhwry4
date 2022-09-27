const conn = require('../db.js')
// get all data
const getAllProducts = (req, res) => {

    conn.query("select * from product",(error,data)=>{ 
       if(!error){
           res.json(data)
           return 
       }
       res.send("xeta bash verdi")
    })
}
// create product
const CerateProducts = (req, res) => {
    const { name, size, image, category } = req.body
    const sql = `insert into product(name,size,image,category)
                values ("${name}","${size}","${image}",${Number(category)});`
    conn.query(sql, (error) => {
        if (!error) {
            return conn.query('select * from product', (error, data) => {
                if (!error) {
                    res.status(200).json(data)
                    return
                }
                res.status(401).send("Xeta bash verdi")
            })

        }
        res.send("xeta bash verdi")
    })
}
// update products

const UpdateProducts = (req, res) => {
    const { name, size, image, category } = req.body

    const id = req.params.id
    console.log(id)
    const sql = `
    update product 
     set name="${name}",size="${size}",image="${image}",category="${category}" where id=${Number(id)}
     `
    //  console.log(sql)
    conn.query(sql,(error)=>{
        if(!error){
         return conn.query("select * from product",(err,data)=>{
              if(!err){
                 return res.json(data).status(200)
              }
              res.send("xeta bash verdi").status(400)
          })
        }
        res.status(401).send('errorororororor')
    })



}
// delete products

const DeleteProducts = (req,res)=>{ 
   console.log(req.params)
   const sql =`
      delete from product where id=${req.params.id};
   
   `
    conn.query(sql,(errr)=>{
        if(!errr){
           return  conn.query('select * from product',(err,data)=>{
              if(!err){
               return res.json(data)
              }
              res.send("error bash verdi")
            })
        }
        res.send("xeta bash verdi")
    })

}

module.exports = {
    getAllProducts,
    CerateProducts,
    UpdateProducts,
    DeleteProducts
}

