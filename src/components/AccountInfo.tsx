import logo from "../logo.svg";
import "../App.css";
import { useContext } from "react";
import currency from "../modules/currencyFormat";
import AccountContext from "../contexts/accountContext";

function AccountInfo() {
  const account = useContext(AccountContext)
  // const [balance, setBalance] = React.useState(account.balance);

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-primary">Welcome to React Bank</h1>
      <h2>{account.account.accountName}: {currency.format(account.account.balance)}</h2>
    </>
  );
}

export default AccountInfo;
