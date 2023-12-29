import express from 'express';
import { cartRouter } from './routes/carts.router.js';
import { productRouter } from './routes/products.router.js';
import { viewsRouter } from './routes/views.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import mongoose from 'mongoose';


const MONGO = "mongodb+srv://lybauber:colombia123@dbprueba.6vwlw9c.mongodb.net/ecommerce"

const connection = mongoose.connect(MONGO);


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




const httpServer = app.listen(PORT, () => {
    console.log(`${PORT} Server`);
})





