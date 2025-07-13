import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "inicio.html"));
});

router.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contato.html"));
});

router.post("/contato-recebido", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mensagem enviada!</title>
        <link rel="stylesheet" type="text/css" href="/css/contatoRecebido.css" />
    </head>
    <body>
    <main>
        <h1>Muito obrigade ${req.body.nome}!</h1>
        <h2>A DevBurguer entrará em contato com você através do email ${req.body.email}!</h2>
        <p class="label">O assunto foi:</p>
        <p class="description">${req.body.assunto}</p>
        <p class="label">A mensagem foi:</p>
        <p class="description">${req.body.mensagem}</p>
        <a href="/"><button>Voltar para a página inicial</button></a>
    </main>
    </body>
    </html>
    `);
});

router.get("/api/lanches", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "data", "lanches.json"));
});

router.get("/sugestao", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sugestão recebida!</title>
        <link rel="stylesheet" type="text/css" href="/css/sugestao.css" />
    </head>
    <body>
    <main>
        <h1>Muito obrigade pela sugestão!</h1>
        <h2>A DevBurguer vai revisar a sua receita e, quem sabe, adicioná-la no cardápio! :D</h2>
        <p class="label">O nome da sua receita foi:</p>
        <p class="description">${req.query.nome}</p>
        <p class="label"> Os ingredientes são:</p>
        <p class="description">${req.query.ingredientes}</p>
        <a href="/"><button>Voltar para a página inicial</button></a>
    </main>
    </body>
    </html>
    `);
});

router.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

export default router;
