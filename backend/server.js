import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

app.use('/', (req, res) => {
  res.send('Backend server has started successfully')
});

app.listen(PORT, () => {
  connectDB();
  console.log(`✅🆗 Server started successfully on http://localhost:${PORT}`)
});