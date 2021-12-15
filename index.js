import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./Routes/users.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use("/api", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));