import express from "express";
import routes from "./routes.js";

// Inicializações comuns do Express
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("json spaces", 4);

// As rotas são inseridas aqui.
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
