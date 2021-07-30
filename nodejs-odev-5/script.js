const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' || url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>INDEX SAYFASINA HOSGELDINIZ</h1>');
    } else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>');
    } else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>ILETISIM SAYFASINA HOSGELDINIZ</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2>SAYFA BULUNAMADI</h2>');
    }
    res.end();
});

server.listen(port, () => {
    console.log("Port 5000 Dinleniyor.")
});