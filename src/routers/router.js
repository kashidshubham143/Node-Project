let express = require("express")
let prodCtrl = require("../controller/prodController.js");


let router = express.Router()


router.get("/",prodCtrl.homePage)
router.get("/product",prodCtrl.Product)
router.post("/addProd",prodCtrl.addProducts)
router.get("/allProducts",prodCtrl.Allproduct)
router.get("/deleteProd",prodCtrl.DeleteProd)
router.get("/update",prodCtrl.UpdateRender)
router.post("/ProdUpdt",prodCtrl.UpdtProduct)
router.get("/searchProduct",prodCtrl.searchProd)
module.exports = router

