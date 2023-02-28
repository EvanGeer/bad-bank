import { Route, Routes } from "react-router-dom";
import { MainMenu } from "./components/MainMenu";
import { TransferFunds } from "./components/TransferFundsForm";
import { StatementPage } from "./routes/Statement";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu balance={0} />} />
      <Route
        path="/withdrawal"
        element={
          <TransferFunds
            onSubmit={undefined}
            isWithdrawal={undefined}
            balance={undefined}
            onGoBack={undefined}
          />
        }
      />
      <Route
        path="/deposit"
        element={
          <TransferFunds
            onSubmit={undefined}
            isWithdrawal={undefined}
            balance={undefined}
            onGoBack={undefined}
          />
        }
      />
      <Route
        path="/transfer"
        element={
          <TransferFunds
            onSubmit={undefined}
            isWithdrawal={undefined}
            balance={undefined}
            onGoBack={undefined}
          />
        }
      />
      <Route path="/statement" element={<StatementPage statement={null} />} />
    </Routes>
  );
}
