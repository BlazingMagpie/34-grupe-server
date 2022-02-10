class IsValid {
    static username(text) {
        if (typeof text !== 'string') {
            return [true, 'Netinkamo tipo reiksme'];
        }
        return [false, 'Username is valid'];
    }
}

export { IsValid }