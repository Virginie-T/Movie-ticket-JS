var ticket = {
    price: 7.50,
    timeOfViewing: null,
    age: null,
    firstRun: "true",
    setTimeOfViewing: function(param1) {
        this.timeOfViewing = param1;
    },
    setAge: function(param2) {
        this.age = param2;
    },
    setFirstRun: function(param3) {
        this.firstRun = param3;
    },
    calculatePrice: function() {
        if (this.age >= 50) {
            this.price -= 1.00;
        }
        if (this.timeOfViewing < 1700) {
            this.price -= 1.00;
        }
        if (this.firstRun === "false") {
            this.price -= 1.00;
        }
        return this.price;
    }

};


$(document).ready(function() {
    $('form#ticket').submit(function(event) {
            event.preventDefault();
            var movie_title = $('select#movie_title').val();
            var age = $('input#age').val();
            var time = $('select#movie_time').val();
            var firstrelease = $('select#first_release').val();

            var ticket1 = Object.create(ticket);
            ticket1.setAge(age);
            ticket1.setTimeOfViewing(time);
            ticket1.setFirstRun(firstrelease);
            var price = ticket1.calculatePrice();

            $('#result').show();
            $('.price').text(price);


    });
});
