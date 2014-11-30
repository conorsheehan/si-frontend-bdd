var sampleApp4 = {

    // Adds tip to a bill, returns the tip total
    tipCalculator: function(subtotal, tipPercentage) {
        var tipMultiplier = tipPercentage / 100;
        return subtotal * tipMultiplier;
    },

    // Calculates the bill total
    totalCalculator: function(subtotal, tipPercentage) {
        var tipMultiplier = tipPercentage / 100;
        var tip = subtotal * tipMultiplier;
        return subtotal + tip;
    }

};