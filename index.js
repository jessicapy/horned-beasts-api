//Como importar express usando Modulejs
import express from "express"
import 'dotenv/config'

// Importar el módulo de Express usando COMMONJS porque usa 'require' 
    //const express = require('express'); 
    // Crear una nueva aplicación de Express 
    //require('dotenv').config();
    //En el package.json "type":"commonjs" if using require

const app = express(); 
// Definir la ruta GET / 
app.get('/', (req, res) => { res.send('Horned Beasts API de Jessica'); }); 
// Configurar la aplicación para que escuche en el puerto 3001 
const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT is not defined

//definir una nueva ruta GET
app.get('/test', (req, res) => { res.json(  {
    "name": "Jessica",
    "date": "2024-10-28",
    "timestamp": Date.now()
}); }); 
// Configurar la aplicación para que escuche en el puerto 3002 

app.listen(PORT, () => { 
    console.log(`Servidor escuchando en el puerto ${PORT}`); 
});

