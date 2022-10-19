let Funds = require('../Funds');
let Account = require('../Account')
let Statement = require('../Statement')

function formatLine(line) {
    return line[0] + "  " + line[1] + "             " + line[2]
}
function BancAccount(dateProviderFn) {

    let account = new Account(dateProviderFn, []);

    function deposit(amountInEuros) {
        account = account.deposit(Funds(amountInEuros));
    }

    function withdraw(amountInEuros) {
        account = account.withdraw(Funds(amountInEuros));
    }

    function computeStatement() {
        let statement = Statement.print(account.statement());

        let header = statement.header.join('        ');
        let lines = statement.lines.map(formatLine).join('\n')
        let balance = "Balance " + statement.balance;
        return [header,lines, "", balance].join('\n');

    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        computeStatement: computeStatement
    }

}

module.exports = BancAccount
