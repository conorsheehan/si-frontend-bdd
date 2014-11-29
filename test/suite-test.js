describe('The test suite', function() {

    it('evaluates truthiness', function() {
        expect(true).toBe(true);
    });

    it('evaluates failsiness', function() {
        expect(false).toBe(false);
    });

    it('can use variables', function() {
        var a = 12;
        expect(a).toEqual(12);
    });

    it('can have multiple expectations', function() {
        var a = 1,
            b = 55;
        expect(a).toEqual(1);
        expect(a).not.toEqual(b);
    });
});