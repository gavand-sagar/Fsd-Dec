import { Router } from "express";
import { readJsonFromFile, writeJsonToFile } from "../../utilities.js";
const thoughtsRoutes = Router();

// to fetch all the thoughts objects from "thoughts.json"
thoughtsRoutes.get("/thoughts", (req, res) => {
  let thoughtsList = readJsonFromFile("./thoughts.json");

  return res.json(thoughtsList);
});

// to save a new object in "thoughts.json" (post type needed)
thoughtsRoutes.post("/thoughts", (req, res) => {
  let objectToAdd = req.body;
  let thoughtsList = readJsonFromFile("./thoughts.json");
  thoughtsList.unshift(objectToAdd);
  writeJsonToFile("./thoughts.json", thoughtsList);

  return res.json(thoughtsList);
});

export default thoughtsRoutes;
