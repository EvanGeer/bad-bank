import { useNavigate } from "react-router-dom";
import menuButtons from "../types/menuButtons";
import PrimaryButton from "../components/PrimayButton";
import QuickCashButton from "../components/QuickCashButton";

export function AtmMenu({ balance }: { balance: number }) {

  const routeTo = useNavigate();

  return (
    <>
      Choose a Transaction

        <div className="row">
          <PrimaryButton
            text={menuButtons.deposit}
            action={() => routeTo("/deposit")}
          />
          <QuickCashButton amount={80} />
        </div>
        <div className="row">

        <div className="col fluid align-content" style={{width:"300px"}}>&nbsp;</div>

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
