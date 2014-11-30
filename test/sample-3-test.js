xdescribe('The Tip Calculator', function() {

    it('calculates the bill tip, GIVEN a tip percentage of 15%', function() {
        var subtotal = 100,
            tipPercentage = 15,
            expectedTip = 15,
            tip;

        tip = sampleApp3.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

    // it('calculates the bill tip, GIVEN a tip percentage of 20%', function() {
    //     var subtotal = 200,
    //         tipPercentage = 20,
    //         expectedTip = 40,
    //         tip;

    //     tip = sampleApp3.tipCalculator(subtotal, tipPercentage);

    //     expect(tip).toEqual(expectedTip);
    // });

});