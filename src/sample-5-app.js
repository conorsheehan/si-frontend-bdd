var sampleApp5 = {

    // Adds tip to a bill, returns the tip total
    tipCalculator: function(subtotal, tipPercentage) {
        var tipMultiplier = tipPercentage / 100;
        return subtotal * tipMultiplier;
    },

    // Calculates the bill total
    totalCalculator: function(subtotal, tipPercentage) {
        var tip = this.tipCalculator(subtotal, tipPercentage);
        return subtotal + tip;
    },

    // Returns how much each person owes towards the total of a bill
    totalSplitter: function(subtotal, tipPercentage, numberOfPeople) {
        var tipMultiplier = tipPercentage / 100;
        var tip = subtotal * tipMultiplier;
        var total = subtotal + tip;
        return total / numberOfPeople;
    }

};