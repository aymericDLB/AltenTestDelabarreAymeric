const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);

// Définition des Routes
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use(productRoutes);
app.use(cors({origin: '*'}));

server.listen(3000, () => {
  console.log('listening on *:3000');
});
