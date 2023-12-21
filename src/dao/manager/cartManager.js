import fs from 'fs';
import path from 'path';
// import __dirname from '../utils.js';
import __dirname from '../../utils.js';

export default class CartManager {
    constructor(pathFile) {
        this.path = path.join(__dirname, `/dao/files/${pathFile}`);
    }

    getCarts = async () => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        this.carts  = JSON.parse(data);
        return this.carts;     
    }

    getCartById = async (id) => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        this.carts = JSON.parse(data);
        if(this.carts.find((p)=> p.id === id)){
            return (this.carts.find((p)=> p.id === id))
        } else {
            return ("Not found")
        }
   }

}

