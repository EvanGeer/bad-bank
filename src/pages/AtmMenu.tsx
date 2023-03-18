import { useNavigate } from "react-router-dom";
import menuButtons from "../types/menuButtons";
import PrimaryButton from "../components/PrimayButton";
import QuickCashButton from "../components/QuickCashButton";
import { Home } from "./Home";
import AccountInfo from "../components/AccountInfo";

export function AtmMenu() {
  const routeTo = useNavigate();

  return (
    <>
      <Home />
      <AccountInfo />
      Choose a Transaction
      <div className="row">
        <PrimaryButton
          data-testid="atm-deposit"
          text={menuButtons.deposit}
          action={() => routeTo("/deposit")}
        />
        <QuickCashButton amount={80} data-testid="fast-cash-80" />
      </div>
      <div className="row">
        <div className="col fluid align-content" style={{ width: "300px" }}>
          &nbsp;
        </div>

        <PrimaryButton
          text={menuButtons.withdrawal}
          action={() => routeTo("/withdrawal")}
        />
      </div>
      <div className="row">
        <PrimaryButton
          text={menuButtons.statement}
          action={() => routeTo("/statement")}
        />
        <PrimaryButton
          text={menuButtons.transfer}
          action={() => routeTo("/transfer")}
        />
      </div>
    </>
  );
}
