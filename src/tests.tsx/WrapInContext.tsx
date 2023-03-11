import React, { useState } from "react";
import AccountContext from "../contexts/accountContext";
import { AccountType } from "../types/AccountType";
import { HashRouter } from "react-router-dom";
import AccountInfo from "../components/AccountInfo";
import Deposit from "../routes/Deposit";

export function WrapInContext({children}: {children: any[]}) {
  const [account, setAccount] = React.useState({
    accountNumber: "chx123",
    accountName: "Checking",
    accountType: AccountType.CHECKING,
    balance: 100,
    ledger: [],
  });

  return (
    <HashRouter>
      <AccountContext.Provider
        value={{ account, setAccount }}
      >
        {children}
      </AccountContext.Provider>
    </HashRouter>
  );
}
