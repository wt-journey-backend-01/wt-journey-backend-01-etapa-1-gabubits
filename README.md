# Desafio Journey Backend: DevBurguer

Olá! Esse é o repositório sobre a minha proposta de solução para o **primeiro desafio (atividade prática 1)** do Journey Backend, realizado pela WebTech Network com apoio de uma das maiores empresas de tecnologia brasileiras, a Levty.

## Estrutura de projeto

├── public/
│ ├── css/
│ │ ├── 404.css
│ │ ├── contato.css
│ │ ├── contatoRecebido.css
│ │ ├── inicio.css
│ │ └── sugestao.css
│ ├── data/
│ │ └── lanches.json
│ └── 404.html
│
├── views/
│ ├── contato.html
│ └── inicio.html
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── routes.js
└── server.js

## Pastas Principais

### `public/`

Diretório para arquivos estáticos acessíveis publicamente pelo servidor.

#### Subpastas

- **`css/`**: Contém folhas de estilo para as páginas do projeto.

  - `404.css`: Estilos para a página de erro 404.
  - `contato.css`: Estilos para a página de contato.
  - `contatoRecebido.css`: Estilos para a página de confirmação de contato.
  - `inicio.css`: Estilos para a página inicial.
  - `sugestao.css`: Estilos para a página de sugestões.

- **`data/`**: Armazena dados em formato JSON.
  - `lanches.json`: Um arquivo com dados de lanches (menu ou cardápio), que será utilizado futuramente para renderização dinâmica.

### `views/`

Contém os templates HTML das páginas renderizadas pelo servidor.

- `contato.html`: Página de formulário de contato.
- `inicio.html`: Página inicial do projeto.
- `404.html`: Página personalizada para erros 404 (não encontrado).

## Arquivos Principais na Raiz

- **`404.html`**: Página de erro 404.
- **`.gitignore`**: Especifica quais arquivos/diretórios devem ser ignorados pelo Git (ex: `node_modules`).
- **`package-lock.json`**: Registro automático das versões exatas das dependências instaladas.
- **`package.json`**: Configuração do projeto, incluindo metadados, scripts e dependências.
- **`README.md`**: Documentação principal do projeto.
- **`routes.js`**: Define as rotas da aplicação (endpoints) e suas lógicas associadas.
- **`server.js`**: Ponto de entrada principal do servidor (configuração do Express e inicialização).

## Melhorias Implementadas

### Estrutura Aprimorada

- Separação das rotas em um arquivo dedicado (`routes.js`)
- Páginas de CSS específicas para cada view

### Funcionalidades Adicionais

- Sistema completo de tratamento de erros 404 com página customizada
- Página de confirmação de contato (`contatoRecebido.html`)
- Estilização individual para cada página

## Rotas Implementadas

| Rota           | Método | Descrição                         | Arquivos Relacionados                          |
| -------------- | ------ | --------------------------------- | ---------------------------------------------- |
| `/`            | GET    | Página inicial com cardápio       | `views/inicio.html`, `public/css/inicio.css`   |
| `/sugestao`    | GET    | Recebe sugestões via query string | `public/css/sugestao.css`                      |
| `/contato`     | GET    | Página de contato                 | `views/contato.html`, `public/css/contato.css` |
| `/contato`     | POST   | Processa formulário de contato    | `public/css/contatoRecebido.css`               |
| `/api/lanches` | GET    | Retorna cardápio em JSON          | `public/data/lanches.json`                     |
| Qualquer outra | -      | Página 404 customizada            | `public/404.html`, `public/css/404.css`        |

## Como executar

1. Instalar dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Observações

- O projeto utiliza **módulos ES** (indicado pela menção a "JS com módulos").
- A estrutura segue um padrão comum para aplicações Express, separando rotas, views, arquivos estáticos e configurações.
