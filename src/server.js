import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();
console.log(`.env configurado ${process.env.APP_URL}`); // 8626

// define que a comunicacao do express sera por defaul json
app.use(express.json()); 
app.use(cors()); 

app.get("/teste", (req, res) => {res.json({mensagem: "A api está rodando!"})})

// manda o express escutar a porta 3333
app.listen(3000, () => {console.log("Server is running on port 5000")});