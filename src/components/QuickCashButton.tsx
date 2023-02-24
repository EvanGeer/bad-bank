function QuickCashButton({ amount, balance }: { amount: number, balance: number }) {
  const atLeast = (val) => {
    return val > balance ? true : false;
  };

  return (
    <button
      className="col col1"
      type="button"
      onClick={handleSubmit}
      disabled={atLeast(amount)}
    >
      {`$${amount.toString()}`}
    </button>
  );
} export default QuickCashButton;
