import cartModel from "../models/cart.models.js";
import productsModel from "../models/products.models.js";


class CartManagerDB {

    getCarts = async () => {
        const carts = await cartModel.find();
        return carts;
    }

    getCartById = async (id) => {
        const cart = await cartModel.findone({_id:id});
        return cart;
    
    }

    createCart = async () => {
        const newCart = await cartModel.create({});
        return newCart;
    
    }

    addProductToCart = async (cid, pid, quantity=1) => {
        const cart = await cartModel.findone({_id:cid});
        if (!cart){
            return {
                status: error,
                msg: `Carrito #${cid} no existe`
            }
        };
        const product = await productsModel.findone({_id:pid});
        if (!product){
            return {
                status: error,
                msg: `Producto #${pid} no existe`
            }
        };

        let productCart = cart.products;

        const indexProduct = productCart.findIndex(p => p.product == pid);

        if(indexProduct != -1){
            const newProduct = {
                product: pid,
                quantity: quantity
            }
            cart.products.push(newProduct);

        } else {
            productCart[indexProduct].quantity += quantity;
        }
       
        await cart.save();
        return cart;
    }
}

export default CartManagerDB;