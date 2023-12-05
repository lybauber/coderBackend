import express from 'express';
import { cartRouter } from './routes/carts.router.js';
import { productRouter } from './routes/products.router.js';
// import handlebars from 'express-handlebars';
// import __dirname from './utils.js';



const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// app.engine("handlebars", handlebars.engine());
// app.set("views", __dirname + "./views");
// app.set("view engine", "handlebars");


app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);



app.listen(PORT, () => {
    console.log(`${PORT} Server`);
})





// const products = new ProductManager();


// app.get('/products', async (req, res) => {

//     let limit = parseInt(req.query.limit);

//     if (!limit) return res.send(await products.getProducts());
    
//     let all = await products.getProducts();
//     let limited = all.slice(0, limit);
      
//     res.send(limited);
// })


// app.get('/products/:pid', async (req, res) => {
//     let id = parseInt(req.params.pid);
//     res.send(await products.getProductById(id));
// })

