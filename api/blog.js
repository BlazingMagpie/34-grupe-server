import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";
import { utils } from "../lib/utils.js";

const handler = {};

handler.blog = async (data, callback) => {
    const acceptableMethods = ['get', 'post', 'put', 'delete'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return await handler._blog[data.httpMethod](data, callback);
    }

    return callback(404, {
        status: 'error',
        msg: 'Tavo norimas HTTPmethod yra nepalaikomas'
    });
}

handler._blog = {};

handler._blog.post = async (data, callback) => {
    const postObj = data.payload;

    if (!postObj) {
        return callback(400, {
            status: 'error',
            msg: 'Nevalidus JSON objektas'
        });
    }

    const [titleError, titleMsg] = IsValid.title(postObj.title);
    if (titleError) {
        return callback(400, {
            status: 'error',
            msg: titleMsg
        });
    }

    const [slugError, slugMsg] = IsValid.slug(postObj.slug);
    if (slugError) {
        return callback(400, {
            status: 'error',
            msg: slugMsg
        });
    }

    const [contentError, contentMsg] = IsValid.content(postObj.content);
    if (contentError) {
        return callback(400, {
            status: 'error',
            msg: contentMsg
        });
    }

    const postData = {
        title: postObj.title,
        slug: postObj.slug,
        content: postObj.content,
    }

    const creationStatus = await file.create('/data/blog-posts', postObj.slug + '.json', postData);
    if (creationStatus !== true) {
        return callback(500, {
            status: 'error',
            msg: creationStatus
        });
    }

    return callback(200, {
        status: 'success',
        msg: 'Naujienos irasas sukurtas',
        action: {
            name: 'redirect',
            param: '/blog'
        }
    });
}

handler._blog.get = (data, callback) => {
    // gaunam
    return callback(200, {
        status: 'success',
        msg: 'Paskyros info'
    });
}

handler._blog.put = (data, callback) => {
    // atnaujinam
    return callback(200, {
        status: 'success',
        msg: 'Paskyra atnaujinta'
    });
}

handler._blog.delete = (data, callback) => {
    // istrinam
    return callback(200, {
        status: 'success',
        msg: 'Paskyra istrinta'
    });
}

export default handler;