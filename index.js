const express = require('express');
// npm i cors
const cors = require('cors');
// Aqui busca el módulo routerApi en el archivo index.js en la carpeta routers
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler  } = require('./middleware/error.handler');

const app = express();
const port = process.env.PORT || 3000;

// Para que acepte el método Post agregarmos el middleware
app.use(express.json());

// Para habilitar cors para todas la ip
//  app.use(cors());
// Para habilitar cors para ip selecionados - recomendado
const whiteList = ['https://myapp.co', 'http://127.0.0.1:5500'];
const options = {
    // 'Access-Control-Allow-Origin': 'http://localhost:3000'
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('Ip no permitido: '+ origin + ' ->'));
        }
    }
}
app.use(cors(options));

app.get('/', (req, res) => {
    res.send('Hola server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port , () => {
    console.log('Mi port' + port);
})