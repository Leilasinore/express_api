import userRoutes from "./routes/user.js";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import express from "express";

//require("dotenv").config();

const app = express();
const PORT = 2000;
app.use(bodyParser.json());
app.use("/user", userRoutes);

app.get("/", (req, res) => res.send("Hello from homepage"));

app.listen(PORT, () => {
  console.log(`server is live on http:localhost:${PORT}`);
});
