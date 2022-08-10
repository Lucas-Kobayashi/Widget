// Tipos de comandos HTTP mais utilizados em uma api restfull.

// GET = Buscar informações.
// POST = Cadastrar informações.
// PUT = Atualizar informações de uma entidade.
// PATCH = Atualizar uma informação única de uma entidade.
// DELETE = Apagar uma informação.

import express from "express";
import cors from "cors";
import { routes } from "./route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Tá rodando o sever");
});
