import { Router } from "express";

const productRoutes = Router();

let products = [
  {
    brand: "oppo",
    model: "N2",
    price: 200,
  },
  {
    brand: "apple",
    model: "Iphone 14",
    price: 1000,
  },
  {
    brand: "apple",
    model: "Iphone 14 Pro",
    price: 1400,
  },
  {
    brand: "google",
    model: "Pixel 7",
    price: 1000,
  },
  {
    brand: "samsung",
    model: "galaxy s22 ultra",
    price: 1200,
  },
];

productRoutes.post("/add-product", (req, res) => {
  let productObj = req.body;

  products.push(productObj);

  res.send("added");
});

productRoutes.get("/get-all", (req, res) => {
  if (req.query.brand) {
    let brand = req.query.brand;

    return res.json(products.filter((x) => x.brand == brand));
  }

  if (req.query.priceLessThan) {
    let price = req.query.price;

    return res.json(products.filter((x) => x.price <= req.query.priceLessThan));
  }

  return res.json(products);
});

export default productRoutes;
