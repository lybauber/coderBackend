import express from 'express';
import { cartRouter } from './routes/carts.router.js';
import { productRouter } from './routes/products.router.js';
import { viewsRouter } from './routes/views.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';



const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use('/', productRouter);
app.use('/realtimeproducts', viewsRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);




app.listen(PORT, () => {
    console.log(`${PORT} Server`);
})





