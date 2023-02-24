import { Route } from "react-router";
import { MainMenu } from "./components/MainMenu";
import { TransferFunds } from "./components/TransferFundsForm";

export function Routes() {
    <Route path="/" component={<MainMenu  />}/>
    <Route path="/withdrawal" component={<TransferFunds  />}/>
    <Route path="/deposit" component={<TransferFunds  />}/>
    <Route path="/transfer" component={<TransferFunds  />}/>
    <Route path="/statement" component={<MainMenu  />}/>
}