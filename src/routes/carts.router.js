import { Router } from "express";
import  CartManager  from "../manager/cartManager.js";

const path = "carts.json"
const router = Router();
const cartManager = new CartManager(path);

router.get("/", async (req, res) => {  
    const carts = await cartManager.getCarts();
    res.send({
        status: "success",
        carts: carts
    });
})

router.get("/:cid", async (req, res) => {
    let id = parseInt(req.params.cid);
    const cart = await cartManager.getCartById(id);
    res.send({
        status: "success",
        cart: cart
    });
   

})

router.post("/", async (req, res) => {
    // const cart = await cartManager.createCart();
    // res.status(201).send(cart);
    res.send('this is the post cart')

})

router.post("/:cid/product/:pid", async (req,res)=>{
    const {cid, pid} = req.params;
    res.send(`this is the post product by cart ${cid} and product${pid}`)
})



router.put("/:cid", async (req, res) => {
    // const cart = await cartManager.addProductToCart(req.params.cid, req.params.pid);
    // res.status(201).send(cart);
    // console.log(cart);
    // return cart;
    res.send('this is the post cart id')

})

router.delete("/:cid", async (req, res) => {
    // const cart = await cartManager.deleteCart(req.params.cid);
    // res.send(cart);
    res.send('this is the delete cart')
    
})

export {router as cartRouter}