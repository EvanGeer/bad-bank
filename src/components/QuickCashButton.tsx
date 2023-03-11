import { useState } from "react";
import { useContext } from "react";
import AccountContext from "../contexts/accountContext";
import Transactions from "../modules/Transactions";
import Transaction from "../types/Transaction";
import TransactionToast from "./TransactionToast";

function QuickCashButton({ amount }: { amount: number }) {
  const { account, setAccount } = useContext(AccountContext);
  const [transaction, setTransaction] = useState<Transaction>();

  const atLeast = (val: number) => {
    return val > account.balance ? true : false;
  };

  const handleSubmit = () => {
    const updatedAccount = Transactions.withdrawal(account, amount);
    // const trans = updatedAccount.ledger.at(-1);
    // setTransaction(trans);
    setAccount(updatedAccount);
  };

  return (
    <>
      <button
        data-testid={`fast-cash-${amount}`}
        className="col fluid align-content"
        type="button"
        onClick={handleSubmit}
        disabled={atLeast(amount)}
        style={{
          width: "300px",
        }}
      >
        {`$${amount.toString()}`}
      </button>
    </>
  );
}
export default QuickCashButton;
