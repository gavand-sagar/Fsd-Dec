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

miscRoutes.get('/square/:number', (req, res) => {
    let number = req.params.number
    let square = number * number
    res.send(`${square}`);
})


miscRoutes.get('/cube', (req, res) => {
    let number = req.query.number
    let cube = number * number * number
    res.send(`${cube}`);
})

export default miscRoutes;