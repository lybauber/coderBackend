import { Router } from "express";
import ProductManagerDB from "../dao/dbManagers/ProductManagerDB.js";



const router = Router();
const productManagerdb = new ProductManagerDB();




router.get("/", async (req, res) => {
    
try {

    const {limit, page, sort, category, price} = req.query

    const options = {
        limit: limit ? parseInt(limit) : 10,
        page: page ? parseInt(page) : 1,
        sort: {price: sort === "asc" ? 1 : -1},
        lean: true
    }

    const products = await productManagerdb.getProducts();
   
    if(products.hasPrevPage){
        products.prevLink = `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${products.prevPage}`
    }
    if(products.hasNextPage){
        products.nextLink = `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${products.nextPage}`
    }

    res.render("home", {products})
} catch (error) {
    console.log(error);
    res.send({
        status: "error",
        error: error.message
    })
    return; 

}



});
   

router.get("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid);
    const product = await productManagerdb.getProductById(id);
    res.send({
        status: "success",
        product: product
    });
   
})

router.post("/", async (req, res) => {
    const product = req.body
    const newProduct = await productManagerdb.createProduct(product);
    res.send({
        status: "success",
        products: newProduct,
    });

})


router.put("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid);
    const product = req.body
    const updatedProduct = await productManagerdb.updateProduct(id, product);
    res.send(updatedProduct);
  

})

// router.delete("/:pid", async (req, res) => {
//     let id = parseInt(req.params.pid);
//     const deletedProduct = await productManagerdb.deleteProductById(id);
//     res.send({
//         status: " Deleted success",
//         product: deletedProduct,
//     });

// })

export {router as productRouter};