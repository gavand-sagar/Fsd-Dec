import { Router } from "express";
import { readJsonFromFile, writeJsonToFile } from "../../utilities.js";
const userRoutes = Router();

userRoutes.get("/authenticate", (req, res) => {
  let username = req.query.username;
  let password = req.query.password;

  if (username == "rasul" && password == "123") {
    res.json({ status: "Valid" });
  } else {
    res.json({ status: "Invalid" });
  }
});

userRoutes.post("/add-user", (req, res) => {
  let userObj = req.body;

  let user = readJsonFromFile("./user.json");
  user.push(userObj);
  writeJsonToFile("./user.json", user);

  res.json("added");
});

userRoutes.get("/get-all-users", (req, res) => {
  let user = readJsonFromFile("./user.json");
  return res.json(user);
});

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
