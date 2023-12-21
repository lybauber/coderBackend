import fs from 'fs';
import path from 'path';
import __dirname from '../../utils.js';
import { profileEnd } from 'console';

// class ProductManager {
//     constructor(){
//         this.path = "../src/files/products.json"
//     }

//     getProducts = async () => {
//         let products = await fs.promises.readFile(this.path, 'utf-8')
//         let productsJson = JSON.parse(products)
//         console.log(productsJson)
//     }

// }

// const product = new ProductManager()
// product.getProducts()


export default class ProductManager {
    constructor(pathFile) {
        this.path = path.join(__dirname, `dao/files/${pathFile}`);
        
    }

    static id = 0;

    addProduct = async (product) => {
        const products = await this.getProducts();
        if(products.length === 0){
            product.id = 1;
        } else{
            product.id = products[products.length - 1].id + 1;
        }
        products.push(product);
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
        return "producto agregado";
    }


    getProducts = async () => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        let dataJson  = JSON.parse(data);
        return dataJson; 
    
    }

   getProductById = async (id) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        this.products = JSON.parse(data);
        if(this.products.find((p)=> p.id === id)){
            return (this.products.find((p)=> p.id === id))
        } else {
            return ("Not found")
        }
   }

   deleteProductById = async (id) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        this.products = JSON.parse(data);
        if(this.products.find((p)=> p.id === id)){
            this.products = this.products.filter((p)=> p.id !== id)
            await fs.promises.writeFile(this.path, JSON.stringify(this.products));
        } else {
            return console.log("Not found")
        }
   }

    updateProduct = async (id, product) => {
            let products = await this.getProducts();
            
            if(products.find((p) => p.id === id)) {
              products = products.map((p) => p.id === id ? {...p,...product} : p)
              
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
            
            } else {
                return ("Not found")
            }
        
        }



 }

  

