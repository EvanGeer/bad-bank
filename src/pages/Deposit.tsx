import { TransactForm } from "../components/TransactForm";
import Transactions from "../modules/Transactions";
import { Validation } from "../modules/Validation";
import TransactionType from "../types/TransactionType";

export default function Deposit() {
  return (
    <TransactForm
      validations={[Validation.isGreaterThenZero]}
      transaction={Transactions.deposit}
      transactionType={TransactionType.DEPOSIT}
    />
  );
}
