import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";
import { utils } from "../lib/utils.js";
import config from '../config.js';
import { database } from "../lib/database.js";
import { promisify } from "util";

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

handler._token.post = async (data, callback) => { //Login
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

    const execute = promisify(database.execute);
    const res = await execute('select id, username, email from users WHERE email = ? AND password = ?;', 
                              [userObj.email, utils.hash(userObj.pass)]);

    if (res.length != 1) {
        return callback(400, {
            status: 'error',
            msg: 'Invalid email and password match 1'
        });
    }

    const savedUserData = res[0];
    if (!savedUserData) {
        return callback(500, {
            status: 'error',
            msg: 'Internat server error while trying to get user information'
        });
    }

    const userData = {
        email: userObj.email,
        expire: Date.now() + 7 * 86400000
    }

    const token = utils.randomString(20);
    try{
        await execute('INSERT tokens(token, userId, expiresAt) VALUES(?,?,?)', [token, savedUserData.id, userData.expire]);
    }
    catch (error) {
        return callback(500, {
            status: 'error',
            msg: error.msg
        });
    }

    const cookies = [
        'login-token=' + token,
        'path=/',
        'domain=localhost',
        'max-age=' + config.cookiesMaxAge,
        'expires=Sun, 16 Jul 3567 06:23:41 GMT',
        // 'Secure',
        'SameSite=Lax',
        'HttpOnly'
    ];

    return callback(200, {
        status: 'success',
        msg: 'Sesija sukurta',
        action: {
            name: 'redirect',
            param: '/'
        }
    }, {
        'Set-Cookie': cookies.join('; '),
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