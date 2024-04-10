import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            'someClass class1 class2',
        );
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 hover scrollable';
        expect(
            classNames('someClass', { hover: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
    test('without one mode', () => {
        const expected = 'someClass class1 class2 hover';
        expect(
            classNames('someClass', { hover: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
    test('without mods undefined', () => {
        const expected = 'someClass class1 class2 hover';
        expect(
            classNames('someClass', { hover: true, scrollable: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
