// Importar el módulo de Express 
const express = require('express'); 
// Crear una nueva aplicación de Express 
require('dotenv').config();
const app = express(); 
// Definir la ruta GET / 
app.get('/', (req, res) => { res.send('Horned Beasts API de Jessica'); }); 
// Configurar la aplicación para que escuche en el puerto 3001 
const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT is not defined
app.listen(PORT, () => { 
    console.log(`Servidor escuchando en el puerto ${PORT}`); 
});

