const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log('Escuchando en puerto 8080');