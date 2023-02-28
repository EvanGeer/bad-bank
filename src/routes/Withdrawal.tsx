import React from "react";
import QuickCashButton from "../components/QuickCashButton";
import {TransferFunds} from "../components/TransferFundsForm";

export function Withdrawal({onSubmit, balance, onGoBack}) {
    const handleSubmit = (e) => {
        let dollarAmount = e.target.textContent;
        console.log(dollarAmount);
        onSubmit(dollarAmount);
    }
    
    const isIncrementOf20 = (val) => {
      console.log(`${val} % 20 = ${val % 20}`)
      let isValid = val === undefined || val % 20 === 0;
      let validation = {
        result: isValid,
        message: `${val} is not a multiple of 20...`
      }
      console.log(validation);
      return validation;
    }

  return (
    <>
      Choose a Dollar Amount
      <div className="grid-container">
        <QuickCashButton
          // className="col col1"
          amount={20}
          balance={balance}
        />
        <QuickCashButton
          // className="col col2"
          amount={0}
          balance={balance}
        />
        <QuickCashButton
            // className="col col1"
            amount={40}
            balance={balance}
          />
          <QuickCashButton
            // className="col col2"
            amount={100}
            balance={balance}
          />
          <QuickCashButton
            // className="col col1"
            amount={60}
            balance={balance}
          />
          <QuickCashButton
            // className="col col2"
            amount={200}
            balance={balance}
          />
        </div>
      <div>Custom Amount</div>
      <small>... in multiples of $20</small>
      <TransferFunds
        customValidation={isIncrementOf20}
        onGoBack={onGoBack}
        balance={balance}
        onSubmit={onSubmit}
        isWithdrawal={true}
      />
    </>
  );
}
