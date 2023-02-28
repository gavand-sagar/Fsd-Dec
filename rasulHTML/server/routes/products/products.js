import { Router } from "express";
import { readJsonFromFile, writeJsonToFile } from "../../utilities.js";

const productRoutes = Router();

productRoutes.post("/add-product", (req, res) => {
  let productObj = req.body;

  let products = readJsonFromFile("./products.json");
  products.push(productObj);
  writeJsonToFile("./products.json", products);

  res.send("added");
});

productRoutes.get("/get-all-products", (req, res) => {
  let products = readJsonFromFile("./products.json");
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
