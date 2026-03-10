const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>¡Despliegue Exitoso! Pipeline DevSecOps funcionando correctamente.</h1><p>Victor Julian Caballero.</p>');
});

// Endpoint de salud para Kubernetes/ArgoCD
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
