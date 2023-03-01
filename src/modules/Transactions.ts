import Account from "../types/Account";
import Transaction from "../types/Transaction";
import TransactionType from "../types/TransactionType";
import currencyFormat from "./currencyFormat";

namespace Transactions {
  export function withdrawal(account: Account, amount: number): Account {
    const trans = getWithdrawal(account, amount);

    return transact(account, trans);
  }

  export function deposit(account: Account, amount: number): Account {
    const trans = getDeposit(account, amount);

    return transact(account, trans);
  }

  export function transfer(
    from: Account,
    to: Account,
    amount: number
  ): { to: Account; from: Account } {
    const xferFrom = getWithdrawal(from, amount);
    const xferTo = getDeposit(to, amount);

    const newTo = transact(to, xferTo);
    const newFrom = transact(to, xferFrom);

    return {
      to: newTo,
      from: newFrom,
    };
  }


  function transact(account: Account, trans: Transaction): Account {
    const newLedger = [...account.ledger, trans];
    const updatedAccount = {
      ...account,
      balance: trans.newTotal,
      ledger: newLedger,
    };

    return updatedAccount;
  }

  function getWithdrawal(
    account: Account,
    amount: number,
    description: string | null = null
  ): Transaction {
    const newTotal = account.balance - amount;
    const newDescription =
      description ?? `Withdrawal: ${currencyFormat.format(amount)} from ${account.accountName}`;
    const trans = {
      date: new Date(),
      amount,
      newTotal,
      type: TransactionType.WITHDRAWAL,
      description: newDescription,
    };

    console.log(newDescription);
    return trans;
  }



  function getDeposit(
    account: Account,
    amount: number,
    description: string | null = null
  ): Transaction {
    console.log(amount);
    console.log(account);
    const newTotal = account.balance + amount;
    const newDescription =
      description ?? `Deposit: ${currencyFormat.format(amount)} to ${account.accountName}`;
    const trans = {
      date: new Date(),
      amount,
      newTotal,
      type: TransactionType.DEPOSIT,
      description: newDescription,
    };
    console.log(newDescription);
    console.log(trans);
    return trans;
  }



//   function old_transfer(val: string, isWithdrawal = true) {
//     console.log(`Is Withdrawal: ${isWithdrawal}, ${val}`);
//     let transfer =
//       typeof val === "number"
//         ? Number(val)
//         : typeof val === "string"
//         ? Number(val.replace("$", ""))
//         : null;

//     console.log(`Parsed Transfer: ${transfer}`);

//     if (transfer === null || transfer < 0) {
//       console.warn(`Invalid transfer: ${val}`);
//       return;
//     }

//     // handleNav(menuButtons.mainMenu);
//     if (transfer === 0) return; // no need to record +/- $0.00

//     // update balance
//     let newBalance = isWithdrawal ? balance - transfer : balance + transfer;
//     setBalance(newBalance);
//     localStorage.setItem("balance", newBalance.toString());

//     // update statement
//     let newStatement = [
//       ...statement,
//       {
//         description: isWithdrawal ? "Withdrawal" : "Deposit",
//         amount: transfer,
//         total: newBalance,
//       },
//     ];
//     setStatement(newStatement);
//     let json = JSON.stringify(newStatement);
//     localStorage.setItem("statement", json);
//   }
}
export default Transactions;
