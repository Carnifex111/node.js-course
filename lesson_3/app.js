const express = require("express");
const app = express();

app.use((request, _, next) => {
  console.log(`Запрос получен: ${request.method} ${request.path}`);
  next();
});

app.get("/", (_, response) => response.send("<h1>Главная страница</h1>"));
app.get("/about", (_, response) => response.send("<h1>О сайте</h1>"));
app.get("/contact", (_, response) => response.send("<h1>Контакты</h1>"));

app.listen(3000, () => console.log("Сервер запущен на порту 3000"));
