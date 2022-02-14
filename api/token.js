import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";
import { utils } from "../lib/utils.js";

const handler = {};

handler.token = async (data, callback) => {
    const acceptableMethods = ['get', 'post', 'put', 'delete'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return await handler._token[data.httpMethod](data, callback);
    }

    return callback(404, {
        status: 'error',
        msg: 'Tavo norimas HTTPmethod yra nepalaikomas'
    });
}

handler._token = {};

handler._token.post = async (data, callback) => {
    const userObj = data.payload;

    if (!userObj) {
        return callback(400, {
            status: 'error',
            msg: 'Nevalidus JSON objektas'
        });
    }

    const [emailError, emailMsg] = IsValid.email(userObj.email);
    if (emailError) {
        return callback(400, {
            status: 'error',
            msg: emailMsg
        });
    }

    const [passwordError, passwordMsg] = IsValid.password(userObj.pass);
    if (passwordError) {
        return callback(400, {
            status: 'error',
            msg: passwordMsg
        });
    }

    // sukuriam sesija
    // sukuriamas failas: /data/users/[email].json
    userObj.pass = utils.hash(userObj.pass);

    const userData = {
        email: userObj.email,
        password: userObj.pass,
    }

    const creationStatus = await file.create('/data/tokens', userObj.email + '.json', userData);
    if (creationStatus !== true) {
        return callback(500, {
            status: 'error',
            msg: creationStatus
        });
    }

    return callback(200, {
        status: 'success',
        msg: 'Sesija sukurta'
    });
}

handler._token.get = (data, callback) => {
    // gaunam
    return callback(200, {
        status: 'success',
        msg: 'Sesijos info'
    });
}

handler._token.put = (data, callback) => {
    // atnaujinam
    return callback(200, {
        status: 'success',
        msg: 'Sesija atnaujinta'
    });
}

handler._token.delete = (data, callback) => {
    // istrinam
    return callback(200, {
        status: 'success',
        msg: 'Sesija istrinta'
    });
}

export default handler;