import productsModel from "../models/products.models.js";

class ProductManagerDB {
    getProducts = async () => {

        const products = await productsModel.find();

        return {
            status: "success",
            msg: products
        }

        // const products = await productsModel.paginate(
        //     {
        //         //filter
        //     },
        //     {
        //         //options
        //     }
        // );
        // return {
        //     status: "success",
        //     msg: products
        // }
    }

    createProduct = async (product) => {
        const newProduct = new productsModel(product);
        await newProduct.save();
        return {
            status: "success",
            msg: newProduct,
        }
    
    }

    getProductById = async (id) => {

        const product = await productsModel.findById({_id:id});
        return {
            status: "success",
            msg: product,
        }

    }

 
}

export default ProductManagerDB;