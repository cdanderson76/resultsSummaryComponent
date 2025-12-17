import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import resultsRouter from './routes/result-routes.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

app.use('/api/results', resultsRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`✅🆗 Server started successfully on http://localhost:${PORT}`)
});