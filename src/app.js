import express from 'express';
import ProductManager from '../productManager.js';



const app = express();
app.use(express.urlencoded({extended: true}))

const port = 3000;

const products = new ProductManager();


app.get('/products', async (req, res) => {

    let limit = parseInt(req.query.limit);

    if (!limit) return res.send(await products.getProducts());
    
    let all = await products.getProducts();
    let limited = all.slice(0, limit);
      
    res.send(limited);
})


app.get('/products/:pid', async (req, res) => {
    let id = parseInt(req.params.pid);
    res.send(await products.getProductById(id));
})
app.listen(port, () => {
    console.log('servidor');
})
