let db = require("../../db.js")

exports.newProduct=(name,category,price,quantity)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into product values ('0',?,?,?,?)",[name,category,price,quantity],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Product Added...")
            }
        })
    })
}

exports.getProducts=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from product",(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

exports.DeleteProdById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from product where id=?",[id],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Product Deleted...")
            }
        })
    })
}

exports.UpdatePro=(name,category,price,quantity,id)=>{
    return new Promise((resolve,reject)=>{
        db.query("update product set name=?, category=?, price=?, quantity=? where id=?",[name,category,price,quantity,id],(err,result)=>{
            if(err){            
                reject(err)
            }
            else{
                resolve("Product Updated...")
            }
        })
    })
}

exports.searchPro=(pn)=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from product where name like '%"+pn+"%'",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result)
            }
        })
    })
}