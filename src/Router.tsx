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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/auth";
import { useFirestore } from "./firebase/useFirestore";
import { Home } from "./pages/Home";
import { CreateAccount } from "./pages/CreateAccount";

export function Router() {
  const { user } = useFirestore();



  return (
    <Routes>
      <Route path="/" element={user ? <AtmMenu /> : <Home />} />
      <Route path="/withdrawal" element={user ? <Withdrawal /> : <Home />} />
      <Route path="/deposit" element={user ? <Deposit /> : <Home />} />

      <Route path="/statement" element={user ? <StatementPage /> : <Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
}
