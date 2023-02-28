import express from "express";
import cors from "cors";
import thoughtsRoutes from "./routes/thoughts/thoughts.js";
import userRoutes from "./routes/users/users.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", thoughtsRoutes);
app.use("/", userRoutes);

app.listen(3001, () => {
  console.log("Server started");
});
