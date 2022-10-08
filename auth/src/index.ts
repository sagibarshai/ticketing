import express from "express";
import { json } from "body-parser";
const app = express();

app.use(json());

app.get("/api/users/currentuser", (req, res) => {
     res.status(200).send({ message: " hey there" });
});

app.listen(3000, () => console.log("listening on port 3000!!!@@!!!!!!!!!!!"));
