import { Router } from "express";
import { readJsonFromFile, writeJsonToFile } from "../../utilities.js";
const songRoutes = Router();



songRoutes.post('/songs', (req, res) => {
    let songObj = req.body;

    let songs = readJsonFromFile('./songs.json')
    songs.push(songObj)
    writeJsonToFile('./songs.json',songs)

    res.json("added")
})

songRoutes.get('/songs', (req, res) => {
    let songs = readJsonFromFile('./songs.json')

    if(req.query.rating){
        return res.json(songs.filter(x=>x.rating == req.query.rating))
    }


    return res.json(songs)
})

export default songRoutes

