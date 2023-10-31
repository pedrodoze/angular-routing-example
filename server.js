const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o módulo cors
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure o CORS para permitir solicitações de http://localhost:4200
app.use(cors({ origin: 'http://localhost:4200' }));

app.get('/data', (req, res) => {
  // Lógica para lidar com a solicitação no caminho /data
  res.status(200).json({ exampleData: 'Some data from the server' });
});

app.post('/data', (req, res) => {
  const data = req.body;
  // Aqui, você pode salvar os dados no banco de dados ou fazer qualquer processamento necessário.
  console.log('Dados recebidos:', data);
  res.status(200).send('Dados recebidos com sucesso.');
});

app.listen(port, () => {
  console.log(`Servidor Node em execução na porta ${port}`);
});
