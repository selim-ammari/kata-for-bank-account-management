let Funds = require('./Funds');


function Sales(money, date) {

    return {
        money: money,
        date: date
    }
}

Sales.total = function (transactions) {
    return transactions.map(_getFunds).reduce(Funds.add, _noFunds());

}
function _noFunds() {
    return new Funds(0);
}
function _getFunds(t) {
    return t.money
}

module.exports = Sales