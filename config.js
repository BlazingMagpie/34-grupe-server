const environments = {};

environments.dev = {
    name: 'Server',
    envName: 'dev',
    httpPort: 3001,
    defaultLang: 'en',
    cacheEnabled: false,
    cacheTime: {
        default: 10,
        css: 100,
        js: 100,
    },
    password: 'demo-password',
}

environments.production = {
    name: 'Serveris',
    envName: 'production',
    httpPort: 4000,
    defaultLang: 'lt',
    cacheEnabled: true,
    cacheTime: {
        default: 86400,
        css: 86400,
        js: 86400,
    },
    password: 'fretr48t521e4rteye52',
}

environments.test = {
    name: 'Serveris test',
    envName: 'test',
    httpPort: 5000,
    defaultLang: 'ee',
    cacheEnabled: false,
    cacheTime: {
        default: 300,
        css: 300,
        js: 300,
    },
    password: 'esttoo',
}

// NODE_ENV=production node . -> environments.production
// NODE_ENV=test node . -> environments.test
// NODE_ENV=dev node . -> environments.dev
// NODE_ENV=eeretryt node . -> environments.dev
// node . -> environments.dev

const currectEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : '';
const exportableEnvName = typeof environments[currectEnv] === 'object' ? currectEnv : 'dev';

module.exports = environments[exportableEnvName];