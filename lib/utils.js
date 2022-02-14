import crypto from 'crypto';
import config from '../config.js';

const utils = {};

utils.randomString = (size = 20) => {

    return 'e5rrh845h12f5r84hd1gfh25rg';
}

utils.hash = (text) => {
    if (typeof text === 'string' && text !== '') {
        return crypto.createHmac('sha512', config.hashingSecret).update(text).digest('hex');
    }
    return false;
}

utils.fileExtension = (url) => {
    // css/pages/home.css -> css
    // css/pages/home.min.css -> css
    // css/pages/home.min.css?v=2.0.7 -> css

    const pathParts = url.split('?')[0].split('.');
    return pathParts[pathParts.length - 1];
}

utils.parseJSONtoObject = (text) => {
    try {
        return JSON.parse(text);
    } catch (error) {
        return false;
    }
}

export { utils };