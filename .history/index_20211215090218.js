import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(bodyParser.json());

app.use("/api", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));