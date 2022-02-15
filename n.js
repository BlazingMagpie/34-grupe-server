function randomString(size = 20) {
    const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const inter = abc.length;
    let text = '';

    for (let i = 0; i < size; i++) {
        const index = Math.floor(Math.random() * inter);
        text += abc[index];
    }

    return text;
}


for (let i = 0; i < 20; i++) {
    const s = 5 + Math.floor(Math.random() * 15);
    // 5 + [0..14] = [5..19]
    console.log(s, '->', randomString(s));
}