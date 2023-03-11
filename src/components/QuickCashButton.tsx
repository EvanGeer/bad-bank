import { useEffect, useState } from "react";
import { useContext } from "react";
import AccountContext from "../contexts/accountContext";
import Transactions from "../modules/Transactions";
import Transaction from "../types/Transaction";
import TransactionToast from "./TransactionToast";

function QuickCashButton({ amount }: { amount: number }) {
  const { account, setAccount } = useContext(AccountContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const [val, setVal] = useState(amount);

  useEffect(() => {
    console.log(account);
    const newDisabledState = val > account.balance;
    setIsDisabled(newDisabledState);
  }, [account.balance]);

  const handleSubmit = () => {
    const updatedAccount = Transactions.withdrawal(account, amount);
    // const trans = updatedAccount.ledger.at(-1);
    // setTransaction(trans);
    setAccount(updatedAccount);
  };

  return (
    <>
      <button
        data-testid={`quick-cash-${amount}`}
        className="col fluid align-content"
        type="button"
        onClick={handleSubmit}
        disabled={isDisabled}
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
