import React from "react";
import { Link } from "react-router-dom";
import menuButtons from "../types/menuButtons";
import QuickCashButton from "./QuickCashButton";

export function MainMenu({ balance }: { balance: number }) {
  // export function MainMenu({onNav, balance}) {
  // const handleClick = (e) => {

  //     let nav = e.target.textContent;
  //     console.log(nav);
  //     onNav(nav);
  // }

  // const atLeast = (val) => {
  //     return val >= balance ? true : '';
  // }

  return (
    <>
      Choose a Transaction
      <div className="grid-container">
        <Link className="col col1" to="/deposit">
          {menuButtons.deposit}
        </Link>

        <div className="col col2">
          <QuickCashButton amount={80} balance={balance} />
        </div>

        <div className="col1">&nbsp;</div>

        <Link className="col col2" to="/withdrawal">
          {menuButtons.withdrawal}
        </Link>
        <Link className="col col1" to="/statement">
          {menuButtons.statement}
        </Link>
        <Link className="col col2" to="/transfer">
          {menuButtons.transfer}
        </Link>
      </div>
    </>
  );
}
