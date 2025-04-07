import express, { Request, Response } from 'express';
import cors from 'cors';
import router from "./routes/productRoutes.js";

const app = express();
const PORT: number = 3004;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Сервер працює!');
});

app.use('/products', router);

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});