import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1 style='color: red'>OI</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
