import currency from "../helpers/currencyFormat";
import Transaction from "../types/Transaction";

function TransactionCard({transaction}
  : {transaction :Transaction}) {
  return (
    <> 
      <div key={`${transaction.date}-${transaction.amount}`} className="col col1">
        <small>
          {transaction.description}: {currency.format(transaction.amount)}
        </small>
      </div>
      <div className="col col2">{currency.format(transaction.newTotal)}
      </div>
    </>
  );
}

export default TransactionCard;
