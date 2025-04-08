import express from 'express';
import path from 'path';
import fetchRoutes from './routes/fetchRoutes.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(process.cwd(), "public")));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use('/', fetchRoutes);

app.use((req, res, next) => {
  const timestamp= new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Oops! The page you are looking for does not exist.');
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});