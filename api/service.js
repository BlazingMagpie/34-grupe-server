const handler = {};

handler.service = (data, callback) => {
    const acceptableMethods = ['get', 'post', 'put', 'delete'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return handler._service[data.httpMethod](data, callback);
    }

    return false;
}

handler._service = {};

handler._service.get = (data, callback) => {
    // gaunam
    return 'service get';
}

handler._service.post = (data, callback) => {
    // sukuriam
    return 'service post';
}

handler._service.put = (data, callback) => {
    // atnaujinam
    return 'service put';
}

handler._service.delete = (data, callback) => {
    // istrinam
    return 'service delete';
}

export default handler;