xdescribe('The Tip Calculator', function() {

    it('calculates the bill tip, GIVEN a tip percentage of 15%', function() {
        var subtotal = 100,
            tipPercentage = 15,
            expectedTip = 15,
            tip;

        tip = sampleApp7.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

    it('calculates the bill tip, GIVEN a tip percentage of 20%', function() {
        var subtotal = 200,
            tipPercentage = 20,
            expectedTip = 40,
            tip;

        tip = sampleApp7.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

});

xdescribe('The Total Calculator', function() {

    it('calculates the bill total, GIVEN a tip percentage of 15%', function() {
        var subtotal = 100,
            tipPercentage = 15,
            expectedTotal = 115,
            total;

        spyOn(sampleApp7, 'taxCalculator').and.returnValue(0);

        total = sampleApp7.totalCalculator(subtotal, tipPercentage);

        expect(total).toEqual(expectedTotal);
    });

    it('calculates the bill total, GIVEN a tip percentage of 20%', function() {
        var subtotal = 200,
            tipPercentage = 20,
            expectedTotal = 240,
            total;

        spyOn(sampleApp7, 'taxCalculator').and.returnValue(0);

        total = sampleApp7.totalCalculator(subtotal, tipPercentage);

        expect(total).toEqual(expectedTotal);
    });

    // it('calculates the bill total, including tax, GIVEN a tip percentage of 20%', function() {
    //     var subtotal = 200,
    //         tipPercentage = 20,
    //         expectedTotal = 252.5,
    //         total;

    //     spyOn(sampleApp7, 'taxCalculator').and.returnValue(12.5);

    //     total = sampleApp7.totalCalculator(subtotal, tipPercentage);

    //     expect(total).toEqual(expectedTotal);
    // });

});

xdescribe('The Total Splitter', function() {

    it('calculates the split bill, GIVEN a tip percentage of 20% AND 4 people eating', function() {
        var subtotal = 200,
            tipPercentage = 20,
            people = 4,
            expectedTotalEach = 60,
            totalEach;

        spyOn(sampleApp7, 'sendReceipts');

        totalEach = sampleApp7.totalSplitter(subtotal, tipPercentage, people);

        expect(totalEach).toEqual(expectedTotalEach);
    });

    it('calculates the split bill, GIVEN a tip percentage of 10% AND 1 person eating', function() {
        var subtotal = 150,
            tipPercentage = 10,
            people = 1,
            expectedTotalEach = 165,
            totalEach;

        spyOn(sampleApp7, 'sendReceipts');

        totalEach = sampleApp7.totalSplitter(subtotal, tipPercentage, people);

        expect(totalEach).toEqual(expectedTotalEach);
    });

    it('sends receipts to the people eating', function() {
        var subtotal = 150,
            tipPercentage = 10,
            people = 1,
            expectedTotalEach = 165,
            totalEach;

        spyOn(sampleApp7, 'sendReceipts');

        totalEach = sampleApp7.totalSplitter(subtotal, tipPercentage, people);

        expect(sampleApp7.sendReceipts).toHaveBeenCalled();
    });

});