import { Foo } from './';

describe('Foo', () => {
    describe('bar', () => {
        it('should return a concatenation of all parameters', () => {
            expect(new Foo().bar('p1', 'p2', 'p3', 'p4')).toBe('p1 - p2 - p3 - p4');
        });
    });
});
