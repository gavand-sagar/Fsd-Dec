import { Router } from "express"
const productRoutes = Router();
let products = []

productRoutes.get('/products', (req, res) => {

    if (req.query.startswith) {
        return res.json(products.filter(x => x.charAt(0) == req.query.startswith))
    }


    return res.json(products)
})

export default productRoutes
