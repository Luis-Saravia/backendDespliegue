const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('este es el backend que se desplegará en la clase de despliegues');
})

app.listen(PORT, () => {
    console.log(`esta corriendo en el puerto ${PORT}`)
})