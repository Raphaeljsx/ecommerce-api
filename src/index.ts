import express from "express";
import { routes } from "./routes";

const firebase_admin = require("firebase-admin");
const serviceAccount = require("../firebase-adminsdk.json");
 firebase_admin.initializeApp({
  credential: firebase_admin.credential.cert(serviceAccount),
});

const app = express();
const port = 8080;

routes(app);

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`);
});
