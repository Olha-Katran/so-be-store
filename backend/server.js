import express from 'express';
const app = express();
const PORT = 3000;

// Маршрут для перевірки сервера
app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
