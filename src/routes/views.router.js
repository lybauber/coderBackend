import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    res.render('realTimeProducts.handlebars')
})


export {router as viewsRouter};