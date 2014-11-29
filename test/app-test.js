describe('The Deals App', function() {

    var dealApp,
        dealData;

    // Run this block before each test
    beforeEach(function() {
        // Initialize app
        dealApp = app.init();

        // Sample Deal Data
        dealData = {
            deal: {
                title: "Set of 12 Double Wall Fruit Infuser Ice Beverage Water Botttle Tumbler Cups, 20-Ounce for $24.99",
                url: "http://www.amazon.com/"
            },
            source: {
                title: "Amazon"
            }
        };
    });

    // The tests!
    it('Has no Active Deals when the Deal App is started', function() {
        expect(dealApp.activeDeals.length).toEqual(0);
    });

    it('Adds a new Active Deal WHEN a Deal is captured from a Channel', function() {
        var expectedTitle = dealData.deal.title;
        dealApp.captureDeal(dealData);

        expect(dealApp.activeDeals.length).toEqual(1);
        expect(dealApp.activeDeals[0].title).toEqual(expectedTitle);
    });

    it('Sends an Notification Email to the Subscribers WHEN a Deal is captured from a Channel', function() {
        var expected = {
            toAddress: "testdeal@cantina.co",
            fromAddress: "deals@startupinstitute.com",
            subject: "New Deal Alert: Set of 12 Double Wall Fruit Infuser Ice Beverage Water Botttle Tumbler Cups, 20-Ounce for $24.99",
            message: "New Deal Alert from Amazon!\n\n" + dealData.deal.title + "\n\nhttp://www.amazon.com/\n\nFor more info, visit SI Deals!"
        };
        spyOn(dealApp, 'sendEmail');
        dealApp.captureDeal(dealData);

        expect(dealApp.sendEmail).toHaveBeenCalled();
        expect(dealApp.sendEmail).toHaveBeenCalledWith(expected.toAddress, expected.fromAddress, expected.subject, expected.message);

    });
});