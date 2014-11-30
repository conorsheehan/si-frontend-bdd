var sampleApp6 = {

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
        var total = this.totalCalculator(subtotal, tipPercentage);
        var totalEach = total / numberOfPeople;

        this.sendReceipts(totalEach);
        return totalEach;
    },

    // Sends receipt to each person
    sendReceipts: function(totalEach) {
        var message = "You owe " + totalEach + "to someone!";
        this.sendEmail(message);
        return this;
    }

};