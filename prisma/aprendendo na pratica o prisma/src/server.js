import express from "express";

import {routes} from "./routes";

const app = express();

app.use(express.json());

app.listen(3030, () => console.log("Server listening on port 3030"));