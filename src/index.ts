import express from "express";
import { routes } from "./routes";

const app = express();
const port = 8080;

routes(app);

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`);
});
