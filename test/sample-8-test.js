xdescribe('The Tip Calculator', function() {

    it('calculates the bill tip, GIVEN a tip percentage of 15%', function() {
        var subtotal = 100,
            tipPercentage = 15,
            expectedTip = 15,
            tip;

        tip = sampleApp8.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

    it('calculates the bill tip, GIVEN a tip percentage of 20%', function() {
        var subtotal = 200,
            tipPercentage = 20,
            expectedTip = 40,
            tip;

        tip = sampleApp8.tipCalculator(subtotal, tipPercentage);

        expect(tip).toEqual(expectedTip);
    });

});

xdescribe('The Total Calculator', function() {

    it('calculates the bill total, GIVEN a tip percentage of 15%', function() {
        var subtotal = 100,
            tipPercentage = 15,
            expectedTotal = 115,
            total;

        total = sampleApp8.totalCalculator(subtotal, tipPercentage);

        expect(total).toEqual(expectedTotal);
    });

    it('calculates the bill total, GIVEN a tip percentage of 20%', function() {
        var subtotal = 200,
            tipPercentage = 20,
            expectedTotal = 240,
            total;

        total = sampleApp8.totalCalculator(subtotal, tipPercentage);

        expect(total).toEqual(expectedTotal);
    });

    it('calculates the bill total, including tax, GIVEN a tip percentage of 20%', function() {
        var subtotal = 200,
            tipPercentage = 20,
            expectedTotal = 252.5,
            state = "MA",
            total;

        total = sampleApp8.totalCalculator(subtotal, tipPercentage);

        expect(total).toEqual(expectedTotal);
    });

});

xdescribe('The Total Splitter', function() {

    it('calculates the split bill, GIVEN a tip percentage of 20% AND 4 people eating', function() {
        var subtotal = 200,
            tipPercentage = 20,
            people = 4,
            expectedTotalEach = 60,
            totalEach;

        spyOn(sampleApp8, 'sendReceipts');

        totalEach = sampleApp8.totalSplitter(subtotal, tipPercentage, people);

        expect(totalEach).toEqual(expectedTotalEach);
    });

    it('calculates the split bill, GIVEN a tip percentage of 10% AND 1 person eating', function() {
        var subtotal = 150,
            tipPercentage = 10,
            people = 1,
            state = "VT",
            expectedTotalEach = 165,
            totalEach;

        spyOn(sampleApp8, 'sendReceipts');

        totalEach = sampleApp8.totalSplitter(subtotal, tipPercentage, people, state);

        expect(totalEach).toEqual(expectedTotalEach);
    });

    it('sends receipts to the people eating', function() {
        var subtotal = 150,
            tipPercentage = 10,
            people = 1,
            expectedTotalEach = 165,
            totalEach;

        spyOn(sampleApp8, 'sendReceipts');

        totalEach = sampleApp8.totalSplitter(subtotal, tipPercentage, people);

        expect(sampleApp8.sendReceipts).toHaveBeenCalled();
    });

});

xdescribe('The Tax Calculator', function() {

    it('calculates tax owed, GIVEN the meal is eaten in MA', function() {
        //TODO: Write me
    });

    it('calculates tax owed, GIVEN the meal is eaten in VT', function() {
        //TODO: Write me
    });

    it('calculates tax owed, GIVEN the meal is eaten in CA', function() {
        //TODO: Write me
    });

    it('calculates tax owed, GIVEN the state is NOT provided', function() {
        //TODO: Write me
    });

    it('calculates tax owed, GIVEN a negative subtotal AND the meal is eaten in CA', function() {
        //TODO: Write me
    });

});

xdescribe('The Bill Payer', function() {

    it('calculates the tax owed, GIVEN the meal is eaten in ME', function() {
        //TODO: Write me
    });

    it('calculates the tip owed, GIVEN a tip percentage of 15%', function() {
        //TODO: Write me
    });

    it('calculates the total, GIVEN the meal is eaten in CA', function() {
        //TODO: Write me
    });

    it('calculates the total for each person, GIVEN the meal is split between 5 people AND the tip percentage is 20%', function() {
        //TODO: Write me
    });

    it('submits a payment to the restaurant', function() {
        //TODO: Write me
    });

    it('saves the payment for historical records', function() {
        //TODO: Write me
    });

    it('sends receipts to the people eating', function() {
        //TODO: Write me

        // In case you need this:
        // var mockXHR = {
        //     done: function(func) {
        //         func();
        //     }
        // };
    });

});