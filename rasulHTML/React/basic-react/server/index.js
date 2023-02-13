import express from "express";

const app = express();

let fruitList = [];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/add-fruit/:fruit", (req, res) => {
  let fruit = req.params.fruit;
  fruitList.push(fruit);
  res.send(fruit);
});

app.get("/get-all-fruits", (req, res) => {
  let allFruits = fruitList.map((x) => x);
  res.send(`List of fruits:${allFruits}`);
});

app.get("/fruits-starts-with/:start", (req, res) => {
  let start = req.params.start;
  let result = fruitList.filter((x) => x.startsWith(start));

  res.send(`Fruits that starts with ${start}: ${result} `);
});

app.get("/fruits-ends-with/:end", (req, res) => {
  let end = req.params.end;
  let result = fruitList.filter((x) => x.endsWith(end));

  res.send(`Fruits that ends with ${end}: ${result} `);
});

app.get("/login/:username/:password", (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  let result =
    username == "rasul" && password == "123" ? "Welcome!" : "Invalid";
  res.send(result);
});

app.get("/my-info", (req, res) => {
  let info = {
    username: "rasul",
    password: "123",
    email: "rasul@123.com",
    profession: "trainee",
  };

  res.json(info);
});

app.get("/my-info", (req, res) => {
  res.send("Hello World!");
});

app.get("/square/:number", (req, res) => {
  let number = req.params.number;
  let square = number * number;
  res.send(`${square}`);
});

app.get("/area-of-circle/:radius", (req, res) => {
  let radius = req.params.radius;
  let areaOfCircle = 3.14 * radius ** 2;
  res.send(`Area of circle: ${areaOfCircle}`);
});

app.get("/area-of-rect/:length/:width", (req, res) => {
  let length = req.params.length;
  let width = req.params.width;
  let area = length * width;
  res.send(`Area of rectangle: ${area}`);
});

app.listen(3001, () => {
  console.log("Server started");
});
