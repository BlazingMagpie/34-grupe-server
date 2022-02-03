const IsValid = require("./IsValid.js");

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.username()).toBe('Error');
        });
        test('', () => {
            expect(IsValid.username(512)).toBe('Error');
        });
    })
})

describe('IsValid.email()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.email()).toBe('Error');
        });
        test('', () => {
            expect(IsValid.email(512)).toBe('Error');
        });
    })
})

describe('IsValid.password()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            expect(IsValid.password()).toBe('Error');
        });
        test('', () => {
            expect(IsValid.password(512)).toBe('Error');
        });
    })
})