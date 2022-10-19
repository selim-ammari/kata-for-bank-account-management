let Sales = require('./Sales');
let Funds = require('./Funds')
let dateformat = require('dateformat');

function Statement(transactions) {

    return {
        transactions: transactions || []
    }

}

function _lines(transactions) {
    return transactions.map(function (t) {
        let date = dateformat(t.date, "dd/mm/yyyy");
        let transactionAmount = t.money.amount;
        let creditAmount = transactionAmount >0 ? transactionAmount: "";
        let debitAmount = transactionAmount <0 ? Funds.negate(t.money).amount : "";
        return [date, debitAmount, creditAmount]
    })
}

Statement.print = function (statement) {
    return {
        header: ["date", "debit", "credit"],
        balance: Sales.total(statement.transactions).amount,
        lines: _lines(statement.transactions)
    }
}

module.exports = Statement