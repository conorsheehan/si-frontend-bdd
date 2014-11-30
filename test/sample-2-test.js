xdescribe('The test suite', function() {

    it('can have multiple expectations', function() {
        var a = 1,
            b = 55;
        expect(a).toEqual(1);
        expect(a).not.toEqual(b);
    });

    // it("evaluates if an object is defined", function() {
    //     var a = {
    //         foo: "foo"
    //     };

    //     expect(a.foo).toBeDefined();
    //     expect(a.bar).not.toBeDefined();
    // });

    // it("evaluates if an object is undefined", function() {
    //     var a = {
    //         foo: "foo"
    //     };

    //     expect(a.foo).toBeDefined();
    //     expect(a.bar).toBeUndefined();
    // });

    // it("evaluates if an object is null", function() {
    //     var a = null;
    //     var foo = "foo";

    //     expect(null).toBeNull();
    //     expect(a).toBeNull();
    //     expect(foo).not.toBeNull();
    // });

    // it("evaluates truthiness using `truthy`", function() {
    //     var a,
    //         foo = "foo";

    //     expect(foo).toBeTruthy();
    //     expect(a).not.toBeTruthy();
    // });

    // it("evaluates falsiness using `truthy`", function() {
    //     var a,
    //         foo = "foo";

    //     expect(a).toBeFalsy();
    //     expect(foo).not.toBeFalsy();
    // });

    // it("can find an item in an Array", function() {
    //     var a = ["foo", "bar", "baz"];

    //     expect(a).toContain("bar");
    //     expect(a).not.toContain("quux");
    // });

    // it("can evaluate if a function throws an exception", function() {
    //     var foo = function() {
    //       return 1 + 2;
    //     };
    //     var bar = function() {
    //       return a + 1;
    //     };

    //     expect(foo).not.toThrow();
    //     expect(bar).toThrow();
    // });

});