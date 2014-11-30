xdescribe('The Tip Calculator', function() {

    it('calculates the bill tip, GIVEN a tip percentage of 15%', function() {
        var subtotal = 100,
            tipPercentage = 15,
            expectedTip = 15,
            tip;

        tip = sampleApp4.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

    it('calculates the bill tip, GIVEN a tip percentage of 20%', function() {
        var subtotal = 200,
            tipPercentage = 20,
            expectedTip = 40,
            tip;

        tip = sampleApp4.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

});

xdescribe('The Total Calculator', function() {

    // it('calculates the bill total, GIVEN a tip percentage of 15%', function() {
    //     var subtotal = 100,
    //         tipPercentage = 15,
    //         expectedTotal = 115,
    //         total;

    //     total = sampleApp4.totalCalculator(subtotal, tipPercentage);

    //     expect(total).toEqual(expectedTotal);
    // });

    // it('calculates the bill total, GIVEN a tip percentage of 20%', function() {
    //     var subtotal = 200,
    //         tipPercentage = 20,
    //         expectedTotal = 240,
    //         total;

    //     total = sampleApp4.totalCalculator(subtotal, tipPercentage);

    //     expect(total).toEqual(expectedTotal);
    // });

});