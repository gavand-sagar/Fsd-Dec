import { Router } from "express";
import { readJsonFromFile, writeJsonToFile } from "../../utilities.js";
const userRoutes = Router();
userRoutes.get("/check-user", (req, res) => {
  let user = readJsonFromFile("./user.json");
  let username = req.query.username;
  let password = req.query.password;

  if (user.some((x) => x.username == username && x.password == password)) {
    res.json({ status: "Valid" });
  } else {
    res.json({ status: "Invalid" });
  }
});

export default userRoutes;
