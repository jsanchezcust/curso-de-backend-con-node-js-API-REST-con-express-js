const express = require('express');
// Aqui busca el módulo routerApi en el archivo index.js en la carpeta routers
const routerApi = require('./routes');

const { logErrors, errorHandler  } = require('./middleware/error.handler');

const app = express();
const port = 3000;

// Para que acepte el método Post agregarmos el middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola server en express');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port , () => {
    console.log('Mi port' + port);
})