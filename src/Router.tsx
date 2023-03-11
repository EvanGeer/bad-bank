import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AtmMenu } from "./pages/AtmMenu";
import { TransactForm as TransactForm } from "./components/TransactForm";
import AccountContext from "./contexts/accountContext";
import Transactions from "./modules/Transactions";
import { Validation } from "./modules/Validation";
import { StatementPage } from "./pages/Statement";
import { Withdrawal } from "./pages/Withdrawal";
import Deposit from "./pages/Deposit";

export function Router() {
  const { account } = useContext(AccountContext);
  return (
    <Routes>
      <Route path="/" element={<AtmMenu />} />
      <Route path="/withdrawal" element={<Withdrawal />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route
        path="/transfer"
        element={
          <TransactForm
            validations={[Validation.isGreaterThenZero]}
            transaction={Transactions.deposit}
          />
        }
      />
      <Route path="/statement" element={<StatementPage />} />
    </Routes>
  );
}
