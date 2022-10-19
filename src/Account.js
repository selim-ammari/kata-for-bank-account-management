import {Funds} from './Funds';
import {Statement} from './Statement';
import {Sales} from './Sales';

export function Account(dateProviderFn, sales) {


    function deposit(funds) {
        let newSales = _addNewSales(funds);
        return new Account(dateProviderFn, newSales);
    }

    function withdraw(funds) {
        let negativeFunds = Funds.negate(funds);
        let newSales = _addNewSales(negativeFunds);
        return new Account(dateProviderFn, newSales);
    }

    function statement() {
        return new Statement(sales);
    }

    function balance() {
        return Sales.total(sales)
    }

    function _addNewSales(funds) {
        let today = dateProviderFn();
        let newSales = new Sales(funds, today);
        return sales.concat(newSales);
    }


    return {
        deposit: deposit,
        withdraw: withdraw,
        statement: statement,
        balance: balance
    }
}