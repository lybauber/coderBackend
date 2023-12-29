import { Router } from "express";
import CartManagerDB from "../dao/dbManagers/CartManagerDB.js";

const router = Router();
const cartManagerMongo = new CartManagerDB();

router.get("/", async (req, res) => {  
    const carts = await cartManagerMongo.getCarts();
    res.send({
        status: "success",
        carts: carts
    });
})

router.get("/:cid", async (req, res) => {
    let id = parseInt(req.params.cid);
    const cart = await cartManagerMongo.getCartById(id);
    res.send({
        status: "success",
        cart: cart
    });
   

})

router.post("/", async (req, res) => {
    const cart = await cartManagerMongo.createCart();
    res.send({
        status: "success",
        msg: cart,
    })

})

router.post("/:cid/product/:pid", async (req,res)=>{
    const {cid, pid, quantity} = req.params;

    const cart = await cartManagerMongo.addProductToCart(cid, pid, quantity);

    res.send({
        status: "success",
        msg: cart
    })
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