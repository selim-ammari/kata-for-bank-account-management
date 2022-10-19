export function Funds(amountInEuros) {
    return {
        amount: amountInEuros,
    }
}

Funds.add = function(money1, money2) {
    return Funds(money1.amount + money2.amount);
}

Funds.negate = function (money) {
    return Funds(0 - money.amount);
}