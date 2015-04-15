describe('bankAccount', function() {
    describe('deposit', function() {
        it('it will deposit a specified amount into balance', function() {
            var testBankAccount = Object.create(bankAccount);
            testBankAccount.deposit(10);
            expect(testBankAccount.balance).to.equal(10);
        });
    });
    describe('withdraw', function() {
        it('it will withdraw a specified amount from balance', function() {
            var testBankAccount = Object.create(bankAccount);
            testBankAccount.withdraw(10);
            expect(testBankAccount.balance).to.equal(-10);
        });
    });
    describe('balance', function() {
        it('will return the balance', function() {
            var testBankAccount = Object.create(bankAccount);
            expect(testBankAccount.balance).to.equal(0);
        });
    });
});
