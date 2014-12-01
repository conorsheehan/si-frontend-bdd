var sampleApp8 = {

    // Adds tip to a bill, returns the tip total
    tipCalculator: function(subtotal, tipPercentage) {
        var tipMultiplier = tipPercentage / 100;
        return subtotal * tipMultiplier;
    },

    // Calculates the bill total
    totalCalculator: function(subtotal, tipPercentage, state) {
        var tip = this.tipCalculator(subtotal, tipPercentage),
            tax = this.taxCalculator(subtotal, state);
        return subtotal + tip + tax;
    },

    // Returns how much each person owes towards the total of a bill
    totalSplitter: function(subtotal, tipPercentage, numberOfPeople, state) {
        var total = this.totalCalculator(subtotal, tipPercentage),
            totalEach = total / numberOfPeople;

        // this.sendReceipts(totalEach); // Removed and moved to payBill
        return totalEach;
    },

    // Sends receipt to each person
    sendReceipts: function(totalEach) {
        var message = "You owe " + totalEach + "to someone!";
        this.sendEmail(message);
        return this;
    },

    // Returns how much tax is owed on a total
    taxCalculator: function(subtotal, state) {
        var taxRate = state ? this.getStateMealTax(state) : 0;
        return subtotal * taxRate;
    },

    // Returns tax rate for a state
    getStateMealTax: function(state) {
        var taxRates = {
            MA: 0.0625,
            NY: 0.08875,
            NH: 0,
            VT: 0.09,
            ME: 0.055,
            CT: 0.0635,
            RI: 0.01
        };
        return taxRates[state] || 0;
    },

    // Pay a full bill with a group of people
    payBill: function(subtotal, tipPercentage, numberOfPeople, state) {
        // Defaults
        tipPercentage = tipPercentage || 15;
        numberOfPeople = numberOfPeople || 1;

        var self = this,
            payment = {
            subtotal: subtotal,
            tipPercentage: tipPercentage,
            numberOfPeople: numberOfPeople,
            state: state,
            tax: this.taxCalculator(subtotal, state),
            tip: this.tipCalculator(subtotal, tipPercentage),
            total: this.totalCalculator(subtotal, tipPercentage, state),
            totalEach: this.totalSplitter(subtotal, tipPercentage, numberOfPeople, state)
        };

        var paymentXHR = this.submitPayments(payment.totalEach);
        paymentXHR.done(function() {
            self.sendReceipts(payment.totalEach);
        });

        return payment;
    },

    // Send the payments to the restaurant
    submitPayments: function(totalEach) {
        var jqXHR = $.ajax({
            method: 'POST',
            url: '/api/payment',
            data: {
                totalEach: totalEach
            }
        });
        return jqXHR;
    }

};