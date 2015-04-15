describe('movie', function() {
        it('it will return a value of 7.50 for Mean Girls ', function() {
            var testMovie = Object.create(movie);
            expect(testMovie.price).to.equal(7.50);
        });
        describe('setTimeOfViewing', function() {
            it('it will return a value of 1600 for timeOfViewing', function() {
            var testMovie = Object.create(movie);
            testMovie.setTimeOfViewing(1600);
            expect(testMovie.timeOfViewing).to.equal(1600);
        });
    });
        describe('calculateWithTime', function() {
            it('it will return a value of 6.50 for "Mean Girls" matinee', function() {
                var testMovie = Object.create(movie);
                testMovie.calculatePrice();
                expect(testMovie.price).to.equal(6.50);
            });
            it('it will return a value of 7.50 for "Mean Girls" non-matinee', function() {
                var testMovie = Object.create(movie);
                testMovie.setTimeOfViewing(1750);
                testMovie.calculatePrice();
                expect(testMovie.price).to.equal(7.50);
            })
        });





    });
