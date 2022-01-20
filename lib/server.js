const http = require('http');
const config = require('../config.js');

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}/`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method.toLowerCase();
    const parsedPathName = parsedURL.pathname;
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');
    const headers = req.headers;

    req.on('data', (data) => {
        console.log('gavau duomenis...');
    })

    req.on('end', () => {
        let responseContent = '';

        if (req.url === '/') {
            responseContent = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Server</title>
                    </head>
                    <body>
                        SERVER CONTENT - ${config.envName}
                    </body>
                </html>`;
        } else {
            responseContent = 'ERROR: nesupratau ko nori, arba neturiu, to ko nori...'
        }

        return res.end(responseContent);
    })
})

server.init = () => {
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${config.httpPort}`);
    });
}

module.exports = server;