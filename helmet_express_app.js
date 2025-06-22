// myApp.js

const express = require('express');
const helmet = require('helmet@3.21.3');

const app = express();

// Usa helmet para establecer varios encabezados de seguridad HTTP
app.use(helmet());

// Ruta de prueba básica
app.get('/', (req, res) => {
  res.send('¡Aplicación protegida con Helmet!');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
