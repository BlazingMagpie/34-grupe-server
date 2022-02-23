import { server } from './lib/server.js';

const app = {};

app.init = () => {
    // pasiruosti pradinius folder'ius:

    // pasiruosti pradinius failus

    // prisijungimas prie DB (duomenu baze)

    // uzkurti pati serveri (musu programa)
    server.init();

    // reguliariu procesu paleidimas:
    // - istrinti senus/nebereikalingus failus
    // - atsinaujinti informacija per/is API (valiutu kursai)
}

app.init();

export { app };