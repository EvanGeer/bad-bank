import { TransactForm } from "../components/TransactForm";
import Transactions from "../modules/Transactions";
import { Validation } from "../modules/Validation";

export default function Deposit() {
  return (
    <TransactForm
      validations={[Validation.isGreaterThenZero]}
      transaction={Transactions.deposit}
    />
  );
}
