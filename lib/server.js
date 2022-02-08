import http from 'http';
import config from '../config.js';
import { file } from './file.js';
import { utils } from './utils.js';

import { PageHome } from '../pages/home.js';
import { Page404 } from '../pages/404.js';
import { PageBlog } from '../pages/Blog.js';
import { PageRegister } from '../pages/Register.js';
import { PageLogin } from '../pages/Login.js';

import APIservice from '../api/service.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}/`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method.toLowerCase();
    const parsedPathName = parsedURL.pathname;
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');
    const headers = req.headers;

    /* 
    tekstiniai failai:
        - css faila
        - js faila
        - svg faila
    binariniai failai:
        - png/jpg/ico (nuotraukos) faila
        - woff (sriftu) faila
        - media (audio, video) faila
    API
    html turini
    */

    const fileExtension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js', 'svg', 'webmanifest'];
    const binaryFileExtensions = ['eot', 'ttf', 'woff', 'woff2', 'otf', 'png', 'jpg', 'ico'];
    const isTextFile = textFileExtensions.includes(fileExtension);
    const isBinaryFile = binaryFileExtensions.includes(fileExtension);
    const isAPI = trimmedPath.split('/')[0] === 'api';
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    const MIMES = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        ico: 'image/x-icon',
        woff2: 'font/woff2',
        woff: 'font/woff',
        ttf: 'font/ttf',
        otf: 'font/otf',
        eot: 'application/vnd.ms-fontobject',
        webmanifest: 'application/manifest+json',
        pdf: 'application/pdf',
        json: 'application/json',
    };

    req.on('data', (data) => {
        console.log('gavau duomenis...');
    })

    req.on('end', async () => {
        let responseContent = '';

        if (isTextFile) {
            responseContent = await file.read('public', trimmedPath);
            if (responseContent === false) {
                res.writeHead(404);
                responseContent = `ERROR: problema bandant perskaityti faila "${trimmedPath}"`;
            } else {
                res.writeHead(200, {
                    'Content-Type': MIMES[fileExtension],
                })
            }
        }

        if (isBinaryFile) {
            responseContent = await file.readBinary('public', trimmedPath);
            if (responseContent === false) {
                res.writeHead(404);
                responseContent = `ERROR: problema bandant perskaityti faila "${trimmedPath}"`;
            } else {
                res.writeHead(200, {
                    'Content-Type': MIMES[fileExtension],
                })
            }
        }

        if (isAPI) {
            const APIroute = trimmedPath.split('/')[1];
            const APIhandler = server.API[APIroute][APIroute];

            const APIresponse = APIhandler();
            responseContent = JSON.stringify(APIresponse);

            res.writeHead(200, {
                'Content-Type': MIMES.json,
            })
        }

        if (isPage) {
            let pageClass = server.routes['404'];
            if (trimmedPath in server.routes) {
                pageClass = server.routes[trimmedPath];
            }
            let pageObj = new pageClass();
            responseContent = await pageObj.render();

            res.writeHead(200, {
                'Content-Type': MIMES.html,
            })
        }

        return res.end(responseContent);
    })
})

server.routes = {
    '': PageHome,
    'blog': PageBlog,
    'blog/good-morning': PageBlog,
    'blog/good-evening': PageBlog,
    '404': Page404,
    'register': PageRegister,
    'login': PageLogin,
}

server.API = {
    'service': APIservice,
    // 'account': null,
    // 'contact': null,
}

server.init = () => {
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${config.httpPort}`);
    });
}

export { server };