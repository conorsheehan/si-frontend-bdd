var app = (function(_) {

    var FROM_ADDRESS = "deals@startupinstitute.com";

    return {

        activeDeals: [],

        subscribers: [],

        init: function() {
            this.subscribers = [{
                name: "Conor",
                emailAddress: "testdeal@cantina.co"
            }];
            return this;
        },

        // Captures a deal from one of the deal channels
        captureDeal: function(data) {
            var deal = this.getDealFromData(data);

            this.addDeal(deal);
            this.notifySubscribers(deal);
            return this;
        },

        // Returns deal object, given the data from a deal channel
        getDealFromData: function(data) {
            return {
                title: data.deal.title,
                url: data.deal.url,
                channel: data.source.title,
            };
        },

        // Add a deal to the current list of active deals
        addDeal: function(deal) {
            this.activeDeals.push(deal);
            return this;
        },

        // Send a deal notification to the current list of subscribers
        notifySubscribers: function(deal) {
            var notification = {
                deal: deal,
                subject: this.getNotificationSubject(deal),
                message: this.getNotificationMessage(deal)
            };

            _.each(this.subscribers, function(subscriber) {
                this.sendNotificationToSubscriber(notification, subscriber);
            }, this);

            return this;
        },

        // Returns a notification message
        getNotificationMessage: function(deal) {
            return "New Deal Alert from " + deal.channel + "!\n\n" + deal.title + "\n\n" + deal.url + "\n\nFor more info, visit SI Deals!";
        },

        // Returns a notification subject
        getNotificationSubject: function(deal) {
            return "New Deal Alert: " + deal.title;
        },

        // Send a deal notification to an individual subscriber
        sendNotificationToSubscriber: function(notification, subscriber) {
            this.sendEmail(
                subscriber.emailAddress,
                FROM_ADDRESS,
                notification.subject,
                notification.message
            );

            return this;
        },

        // Send an email message
        sendEmail: function(toAddress, fromAddress, subject, message, headers) {
            //TODO: Implement me
            return this;
        }
    };
})(_);

// var dealData1 = {
//     deal: {
//         title: "Hamilton Beach ensemble 6 Slice Toaster Oven for $29.99",
//         url: "http://www.kmart.com/"
//     },
//     source: {
//         title: "KMart"
//     }
// }
// var dealData2 = {
//     deal: {
//         title: "Set of 12 Double Wall Fruit Infuser Ice Beverage Water Botttle Tumbler Cups, 20-Ounce for $24.99",
//         url: "http://www.amazon.com/"
//     },
//     source: {
//         title: "Amazon"
//     }
// }
// var dealData3 = {
//     deal: {
//         title: "Sabrent 60 Watt (12 Amp) 10-Port Family-Sized Desktop USB Rapid Charger for $20 + free shipping",
//         url: "http://www.amazon.com/"
//     },
//     source: {
//         title: "Amazon"
//     }
// }