describe('ticket', function() {
    describe('return', function() {
        it('it will return a value of 7.50 for "Mean Girls" ', function() {
            var testMovie = Object.create(ticket);
            expect(testMovie.price).to.equal(7.50);
        });
    });
        describe('setTimeOfViewing', function() {
            it('it will return a value of 1600 for timeOfViewing', function() {
            var testMovie = Object.create(ticket);
            testMovie.setTimeOfViewing(1600);
            expect(testMovie.timeOfViewing).to.equal(1600);
        });
    });
        describe('calculateWithTime', function() {
            it('it will return a value of 5.50 for "Mean Girls" matinee', function() {
                var testMovie = Object.create(ticket);
                testMovie.setAge(55);
                testMovie.setTimeOfViewing(1600);
                expect(testMovie.calculatePrice()).to.equal(5.50);
            });
        });
        describe('calculateWithTime', function() {
                it('it will return a value of 6.50 for "Mean Girls" non-matinee', function() {
                var testMovie = Object.create(ticket);
                testMovie.setTimeOfViewing(1750);
                testMovie.setAge(18);
                expect(testMovie.calculatePrice()).to.equal(7.50);
            });
        });

        describe('firstRelease', function() {
            it('will return a value of 5.50 for "Mean Girls" matinee and first run', function() {
                var testMovie = Object.create(ticket);
                testMovie.setTimeOfViewing(1600);
                testMovie.setAge(18);
                testMovie.setFirstRun(true);
                expect(testMovie.calculatePrice()).to.equal(5.50);
            });
        });
        describe('firstRelease', function() {
                it('will return a value of 6.50 for "Means Girls" matinee and non firt release', function() {
                        var testMovie = Object.create(ticket);
                        testMovie.setTimeOfViewing(1600);
                        testMovie.setAge(60);
                        testMovie.setFirstRun(false);
                        expect(testMovie.calculatePrice()).to.equal(5.50);
                });
        });


    });
