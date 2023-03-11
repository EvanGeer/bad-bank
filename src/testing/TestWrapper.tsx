import React, { useState } from "react";
import AccountContext from "../contexts/accountContext";
import { AccountType } from "../types/AccountType";
import { HashRouter } from "react-router-dom";
import AccountInfo from "../components/AccountInfo";
import Deposit from "../pages/Deposit";


export function TestWrapper({ children, startingBalance }: { children: any, startingBalance: number}) {
  const [account, setAccount] = React.useState({
    accountNumber: "chx123",
    accountName: "Checking",
    accountType: AccountType.CHECKING,
    balance: startingBalance,
    ledger: [],
  });

  return (
    <HashRouter>
      <AccountContext.Provider value={{ account, setAccount }}>
        <AccountInfo />

        {children}
      </AccountContext.Provider>
    </HashRouter>
  );
}
