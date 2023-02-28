import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/authenticate", (req, res) => {
  let username = req.query.username;
  let password = req.query.password;

  if (username == "Admin" && password == "123") {
    res.json({ status: "Valid" });
  } else {
    res.json({ status: "Invalid" });
  }
});

export default userRoutes;
