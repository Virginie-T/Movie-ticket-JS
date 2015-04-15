var bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += parseInt(amount);
    },
    withdraw: function(amount) {
        this.balance -= parseInt(amount);
    },
    new_deposit: function(amount) {
        this.deposit += parseInt(amount);
    }
};


$(document).ready(function() {
    var bankAccount1 = Object.create(bankAccount);
    $('form#add').submit(function(event) {
        event.preventDefault();
        var name = $('input#name').val();
        var deposit = $('input#deposit').val();
        var withdrawal = $('input#withdraw').val()
            bankAccount1.deposit(deposit);
            bankAccount1.withdraw(withdrawal);
            console.log(bankAccount1);
            $('.final_balance').text(bankAccount1.balance);
    });
});
