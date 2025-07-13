import express from "express";
import { fileURLToPath } from "url";
import path from "path";

// Inicializações comuns do Express
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("json spaces", 4);

// __dirname não existe através do js com módulos.
// Então foi preciso obtê-lo através dessas duas funções.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Rota de entrada (página inicial) da aplicação.
// Essa rota renderiza as opções do cardápio e o formulário de sugestão.
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "inicio.html"));
});

// Rota de contato
// Essa rota renderiza um formulário com nome, email, assunto e mensagem.
app.get("/contato", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "contato.html"));
});

// Rota para onde o usuário será redirecionado após enviar o formulário
// para entrar em contato em /contato. Uma boa pŕática que foi citada
// no enunciado do desafio.
// Como não é possível, por enquanto, usar algo dinâmico com o HTML, então
// essa foi a melhor alternativa que encontrei.
app.post("/contato-recebido", (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;
  res.set("Content-Type", "text/html");
  res.status(200).send(`
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
        <h1>Muito obrigade ${nome}!</h1>
        <h2>A DevBurguer entrará em contato com você através do email ${email}!</h2>
        <p class="label">O assunto foi:</p>
        <p class="description">${assunto}</p>
        <p class="label">A mensagem foi:</p>
        <p class="description">${mensagem}</p>
        <a href="/"><button>Voltar para a página inicial</button></a>
    </main>
    </body>
    </html>
    `);
});

// Rota de API para lanches. Essa rota renderiza um arquivo JSON.
app.get("/api/lanches", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "data", "lanches.json"));
});

// Rota para que renderiza o agradecimento da sugestão.
app.get("/sugestao", (req, res) => {
  const { nome, ingredientes } = req.query;

  res.status(200).send(`
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
        <p class="description">${nome}</p>
        <p class="label"> Os ingredientes são:</p>
        <p class="description">${ingredientes}</p>
        <a href="/"><button>Voltar para a página inicial</button></a>
    </main>
    </body>
    </html>
    `);
});

// Rota do middleware, na qual qualquer outra rota não especificada anteriormente
// renderizará uma tela de erro 404.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
