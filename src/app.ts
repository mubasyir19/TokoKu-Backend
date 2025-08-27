import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import router from './routes/router';
import cors from 'cors';
import morgan from 'morgan';

const app: Express = express();
const port = process.env.PORT || 5000;

config();

app.use(cors());
app.use(express.json());
app.use(morgan('short'));
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.json('TokoKu API (Toko Online API)');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
