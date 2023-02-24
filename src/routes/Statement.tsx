import Transaction from "../types/Transaction";
import TransactionCard from "../components/TransactionCard";

export function StatementPage({ statement }: { statement: Transaction[] }) {
  return (
    <>
      <div className="grid-container">
        {statement.map((x) => (
          <TransactionCard transaction={x} />
        ))}
      </div>
      <button className="col">Go Back</button>
    </>
  );
}
