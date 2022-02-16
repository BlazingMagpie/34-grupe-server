import { utils } from "./utils.js";

describe('utils.parseCookies()', () => {
    test('undefined', () => {
        const rez = utils.parseCookies(undefined);
        expect(rez).toStrictEqual({});
    });

    test('vienas cookie', () => {
        const rez = utils.parseCookies('a=aaa');
        expect(rez).toStrictEqual({
            a: 'aaa'
        });
    });

    test('keletas cookie', () => {
        const rez = utils.parseCookies('a=aaa; b=bbb; c=ccc');
        expect(rez).toStrictEqual({
            a: 'aaa',
            b: 'bbb',
            c: 'ccc'
        });
    });
})