import { Router } from "express";

const miscRoutes = Router();

miscRoutes.get("/my-name", (req, res) => {
  res.send("Latha");
});

miscRoutes.get("/my-friend", (req, res) => {
  res.send("Rahul");
});

miscRoutes.get("/my-pet", (req, res) => {
  res.send("Dolly");
});

miscRoutes.get("/square/:number", (req, res) => {
  let number = req.params.number;
  let square = number * number;
  res.send(`${square}`);
});

miscRoutes.get("/cube", (req, res) => {
  let number = req.query.number;
  let cube = number * number * number;
  res.send(`${cube}`);
});

miscRoutes.get("/products", (req, res) => {
  if (req.query.startswith) {
    return res.json(
      products.filter((x) => x.charAt(0) == req.query.startswith)
    );
  }

  return res.json(products);
});

export default miscRoutes;
