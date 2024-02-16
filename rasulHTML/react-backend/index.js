import express from "express";
import fs from 'fs'
import cors from 'cors'
import productRoutes from "./routes/products/products.js";
import thoughtsRoutes from "./routes/thoughts/thoughts.js";
import songRoutes from "./routes/songs/songs.js";
import userRoutes from "./routes/users/users.js";
import miscRoutes from "./routes/misc/misc.js";

const app = express();
app.use(express.json())
app.use(cors())

app.use("/",productRoutes)
app.use("/",thoughtsRoutes)
app.use("/",songRoutes)
app.use("/",userRoutes)
app.use("/",miscRoutes)
app.get("/", (req, res) => {
  res.send("Hello world");
});





function readfromfile(){
  let content = fs.readFileSync('./data.txt')
  return Number(content)
}

function updateToFile(number){
  // write to file
  fs.writeFileSync('./data.txt',number.toString())
} 






app.get('/counter',(req,res)=>{
  
  let counter = readfromfile();
  res.send(`${counter}`)

})

app.get('/increment',(req,res)=>{
  let value = req.query.value;

  let counter = readfromfile();

  counter = counter + Number(value);

  updateToFile(counter) // why is it important ? 

  res.send(`${counter}`)
})



app.listen(3001, () => {
  console.log("Server started");
});
