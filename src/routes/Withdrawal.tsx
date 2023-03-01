import React from "react";
import { useContext } from "react";
import QuickCashButton from "../components/QuickCashButton";
import { TransactForm } from "../components/TransactForm";
import AccountContext from "../contexts/accountContext";
import Transactions from "../modules/Transactions";
import { Validation } from "../modules/Validation";

export function Withdrawal() {
  const { account } = useContext(AccountContext);

  return (
    <>
      Choose a Dollar Amount
      <div className="row">
        <QuickCashButton amount={20} />
        <QuickCashButton amount={80} />
      </div>
      <div className="row">
        <QuickCashButton amount={40} />
        <QuickCashButton amount={100} />
      </div>
      <div className="row">
        <QuickCashButton amount={60} />
        <QuickCashButton amount={200} />
      </div>
      <div>Custom Amount</div>
      <small>... in multiples of $20</small>
      <TransactForm
        validations={[
          (x) => Validation.wontOverdraft(x, account.balance),
          Validation.isGreaterThenZero,
          Validation.isIncrementOfTwenty,
        ]}
        transaction={Transactions.withdrawal}
      />
    </>
  );
}
