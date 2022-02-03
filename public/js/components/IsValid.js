class IsValid {
    static username(text) {
        const minUsernameLength = 4;
        const maxUsernameLength = 20;

        text = text.trim();

        if (text === '') {
            return 'Pamirsai irasyti slapyvardi';
        }
        if (text.length < minUsernameLength) {
            return 'Per trumpas slapyvardis';
        }
        if (text.length > maxUsernameLength) {
            return 'Per ilgas slapyvardis';
        }
        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        for (const t of text) {
            if (!allowedSymbols.includes(t)) {
                return `Slapyvardyje yra neleistinas simbolis (${t})`;
            }
        }
        return true;
    }

    static email(text) {
        return true;
    }

    static password(text) {
        const minPasswordLength = 12;

        if (text === '') {
            return 'Pamirsai irasyti slaptazodi';
        }
        if (text.length < minPasswordLength) {
            return 'Per trumpas slaptazodis';
        }
        return true;
    }
}

export { IsValid }