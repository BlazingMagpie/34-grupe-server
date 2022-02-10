class IsValid {
    static username(text) {
        if (typeof text !== 'string') {
            return [true, 'Netinkamo tipo "username" reiksme'];
        }
        return [false, 'Username is valid'];
    }

    static email(text) {
        if (typeof text !== 'string') {
            return [true, 'Netinkamo tipo "email" reiksme'];
        }
        return [false, 'Email is valid'];
    }

    static password(text) {
        if (typeof text !== 'string') {
            return [true, 'Netinkamo tipo "password" reiksme'];
        }
        return [false, 'Password is valid'];
    }
}

export { IsValid }