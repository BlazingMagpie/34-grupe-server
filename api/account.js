import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";

const handler = {};

handler.account = (data, callback) => {
    const acceptableMethods = ['get', 'post', 'put', 'delete'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return handler._account[data.httpMethod](data, callback);
    }

    return callback(404, {
        status: 'error',
        msg: 'Tavo norimas HTTPmethod yra nepalaikomas'
    });
}

handler._account = {};

handler._account.post = (data, callback) => {
    const userObj = data.payload;

    if (!userObj) {
        return callback(400, {
            status: 'error',
            msg: 'Nevalidus JSON objektas'
        });
    }

    const [usernameError, usernameMsg] = IsValid.username(userObj.username);
    if (usernameError) {
        return callback(400, {
            status: 'error',
            msg: usernameMsg
        });
    }

    const [emailError, emailMsg] = IsValid.email(userObj.email);
    if (emailError) {
        return callback(400, {
            status: 'error',
            msg: emailMsg
        });
    }

    const [passwordError, passwordMsg] = IsValid.password(userObj.password);
    if (passwordError) {
        return callback(400, {
            status: 'error',
            msg: passwordMsg
        });
    }

    // sukuriam vartotoja
    // sukuriamas failas: /data/users/[email].json
    file.create('/data/users', `[email].json`, userObj);

    return callback(200, {
        status: 'success',
        msg: 'Paskyra sukurta'
    });
}

handler._account.get = (data, callback) => {
    // gaunam
    return callback(200, {
        status: 'success',
        msg: 'Paskyros info'
    });
}

handler._account.put = (data, callback) => {
    // atnaujinam
    return callback(200, {
        status: 'success',
        msg: 'Paskyra atnaujinta'
    });
}

handler._account.delete = (data, callback) => {
    // istrinam
    return callback(200, {
        status: 'success',
        msg: 'Paskyra istrinta'
    });
}

export default handler;