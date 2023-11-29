import fs from 'fs';
import path from 'path';
import __dirname from '../utils.js';

export default class ProductManager {
    constructor(pathFile) {
        // this.path = path.join(__dirname, `./files/${pathFile}`);
        this.path = '../products.txt';
        this.products = [];
    }

    static id = 0;

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        
        ProductManager.id++

        let newProduct = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(newProduct);
        await fs.promises.writeFile(this.path, JSON.stringify(this.products));
        return this.products;
    }

    getProducts = async () => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        this.products = JSON.parse(data);
        return this.products; 
        
    
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

   updateProduct = async (id, title, description, price, thumbnail, code, stock) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        this.products = JSON.parse(data);
        if(this.products.find((p)=> p.id === id)){
            this.products = this.products.map((p)=> p.id === id ? {...p, title, description, price, thumbnail, code, stock} : p)
            await fs.promises.writeFile(this.path, JSON.stringify(this.products));
        } else {
            return console.log("Not found")
        } 
         
        
    
    
   }
}

// const products = new ProductManager();

// products.addProduct("producto prueba", "descripcion prueba", 100, "url", 123, 10)
// products.addProduct("producto prueba2", "descripcion prueba2", 200, "url", 1234, 20)
// products.addProduct("producto prueba3", "descripcion prueba3", 300, "url", 12345, 30)
// products.addProduct("producto prueba4", "descripcion prueba4", 400, "url", 123456, 40)
// products.addProduct("producto prueba5", "descripcion prueba5", 500, "url", 1234567, 50)
// products.addProduct("producto prueba6", "descripcion prueba6", 600, "url", 12345678, 60)
// products.addProduct("producto prueba7", "descripcion prueba7", 700, "url", 123456789, 70)
// products.addProduct("producto prueba8", "descripcion prueba8", 800, "url", 1234567890, 80)
// products.addProduct("producto prueba9", "descripcion prueba9", 900, "url", 12345678901, 90)
// console.log(products);

