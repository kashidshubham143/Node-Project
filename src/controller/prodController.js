let proModel = require("../models/prodModel.js")
exports.homePage = ((req, res) => {
    res.render("home.ejs")
})

exports.Product = ((req, res) => {
    res.render("addProd.ejs", { msg: "" })
})

exports.addProducts = ((req, res) => {
    let { name, category, price, quantity } = req.body
    let promise = proModel.newProduct(name, category, price, quantity)
    promise.then((result) => {
        res.render("addProd.ejs", { msg: result })
    }).catch((err) => {
        res.render("addProd.ejs", { msg: err })
    })
})

exports.Allproduct = ((req, res) => {
    let promise = proModel.getProducts()
    promise.then((result) => {

        res.render("viewProduct.ejs", { ProdList: result })
    }).catch((err) => {
        res.send(err)
    })
})

exports.DeleteProd = ((req, res) => {
    let id = req.query.id
    let promise = proModel.DeleteProdById(id)
    promise.then((result) => {
        let pro = proModel.getProducts()
        pro.then((result) => {

            res.render("viewProduct.ejs", { ProdList: result })
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err)=>{
        res.send(err)
    })
})

exports.UpdateRender=((req,res)=>{
    res.render("updateProd.ejs",
        {   id:req.query.id,
            name:req.query.name,
            category:req.query.category,
            price:req.query.price,
            quantity:req.query.quantity
        })
        console.log(id);
        
})

exports.UpdtProduct=((req,res)=>{
    let { name, category, price, quantity,id } = req.body
    let promise = proModel.UpdatePro(name, category, price, quantity,id)
    promise.then((result)=>{
        let pro = proModel.getProducts()
        pro.then((result) => {

            res.render("viewProduct.ejs", { ProdList: result })
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err)=>[
        res.send("Not Update!!!")
    ])
})

exports.searchProd = (req, res) => {
    let name = req.query.name;
    let promise = proModel.searchPro(name);
    promise.then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log("  " + err);
        res.send(err);
    })

}