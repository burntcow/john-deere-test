import sleep from '../src/sleep';

describe('Sleep Utility', () => {
    it('should resolve value after $x seconds', () => {
        const timer = sleep(1);
        
        expect(timer(123)).resolves.toEqual(123);
    });
});
