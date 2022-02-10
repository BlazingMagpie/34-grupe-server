class IsValid {
    static username(text) {
        if (typeof text !== 'string') {
            return 'Netinkamo tipo reiksme';
        }
        return true;
    }
}

export { IsValid }