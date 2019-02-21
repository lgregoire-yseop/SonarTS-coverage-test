import { Foo } from './';

describe('Foo', () => {
    describe('baz', () => {
        it('should return a `test`', () => {
            expect(new Foo().baz()).toBe('test');
        });
    });
});
