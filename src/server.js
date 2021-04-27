import express from 'express';

const app = express();

// define que a comunicacao do express sera por defaul json
app.use(express.json()); 

app.get("/teste", (req, res) => {res.json({mensagem: "A api está rodando!"})})

// manda o express escutar a porta 3333
app.listen(3333, () => {console.log("Server is running on port 3333")});