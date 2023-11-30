import { Router } from "express";
import ProductManager from "../manager/productManager.js";

// const path = "products.json";
const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
    const products = await productManager.getProducts();
    res.send({
        status: "success",
        products: products
    });
    
})

router.get("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid);
    const product = await productManager.getProductById(id);
    res.send({
        status: "success",
        product: product
    });
   
})

router.post("/", async (req, res) => {
    const {
        title, 
        description,
        price, 
        thumbnail,
        code,
        stock} = req.body;
    const newProduct = await productManager.addProduct(title, description, price, thumbnail, code, stock);
    res.send({
        status: "success",
        products: newProduct,
    });

})


router.put("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid);
    const product = req.body;
    const updatedProduct = await productManager.updateProduct(id, product);
    res.send(updatedProduct);
  

})

router.delete("/:pid", async (req, res) => {
    let id = parseInt(req.params.pid);
    const deletedProduct = await productManager.deleteProductById(id);
    res.send({
        status: " Deleted success",
        product: deletedProduct,
    });

})

export {router as productRouter};