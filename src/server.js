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

// manda o express escutar a porta 5000
const port = process.env.PORT || 5000

app.listen(port, () => {console.log(`sua aplicação está rodando na porta: ${port}`)});