import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AccountInfo from "../components/AccountInfo";
import userEvent from "@testing-library/user-event";
import { assert } from "console";
import { App } from "../App";
import { act } from "react-dom/test-utils";
import { TransactForm } from "../components/TransactForm";
import Deposit from "../routes/Deposit";
import Account from "../types/Account";
import { WrapInContext as Wrapper } from "./WrapInContext";
import { AtmMenu } from "../routes/AtmMenu";
import { ok } from "assert";

// test('renders learn react link', () => {
//   render(<AccountInfo />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const balanceElement = () => screen.getByTestId("account-balance-header");

const Nav = () => {
  return {
    home: screen.getByTestId("Nav-Home"),
    deposit: screen.getByTestId("Nav-Deposit"),
    withdrawal: screen.getByTestId("Nav-Withdrawal"),
    statement: screen.getByTestId("Nav-Statement"),
  };
};

beforeAll(() => {});

beforeEach(() => {
  // render(<App />);
  // setBalanceTo100();
});

afterEach(() => {});

// test("beforeEach sets balance to $100", () => {
//   expect(balanceElement()).toHaveTextContent("$100.00");
// });

test("Fast Cash $80 reduces balance to $20", () => {
  // arrange
  render(<Wrapper>
    <AccountInfo />
    <AtmMenu />
  </Wrapper>)
  const fastCashButton = screen.getByTestId("fast-cash-80");

  act(() => userEvent.click(fastCashButton));

  expect(fastCashButton).toBeDisabled();
  expect(balanceElement()).toHaveTextContent("$20.00");
});

test("Deposit $100", () => {
  // arrange
  render(<Wrapper>
    <AccountInfo />
    <Deposit />
  </Wrapper>)

  const transactInput = screen.getByTestId("transaction-amount-input");
  const okay = screen.getByTestId("Okay");
  expect(balanceElement()).toHaveTextContent("$100.00");

  act(() => {
    // const deposit = screen.getByTestId("Deposit");
    // userEvent.click(deposit);

    userEvent.type(transactInput, "75");
    expect(transactInput).toHaveValue(75);
    fireEvent.keyPress(transactInput, {keyCode: 13});
    // expect(okay).toBeEnabled();

    // userEvent.keyboard("enter");
    fireEvent.click(okay);
    userEvent.click(okay);
  });

  // expect(deposit).toBeEnabled();
  expect(balanceElement()).toHaveTextContent("$175.00");
});


// it('should start at $100.00', () => expect(balanceElement()).toHaveTextContent("$100.00"))
// test("Fast Cash $80 withdraws $80", () => {
//   // arrange
//   // act
//   // assert
// });

function setBalanceTo100() {
  // const beginningBalance = Number(balanceElement().textContent);
  // if (beginningBalance !== 100) {
  const depositAmount = 100; // - beginningBalance;

  // components
  // const input = screen.getByTestId("transaction-amount-input");
  act(() => {
    // render(<TransactForm />)

    userEvent.click(Nav().deposit);
    fireEvent.click(Nav().deposit);
    const submit = screen.getByText("Okay");

    // user actions
    // userEvent.type(input, depositAmount.toString());
    userEvent.click(submit);
    // userEvent.click(Nav().home);
  });
  // }
}

function navigateToMain() {
  throw new Error("Function not implemented.");
}

// function getNav() {
//     Nav = {
//         home: screen.getByTestId("Nav-Home"),
//         deposit = screen.getByTestId("Nav-Deposit"),
//         withdrawal = screen.getByTestId("Nav-Withdrawal"),
//         Home = screen.getByTestId("Nav-Statement"),
//     }
// }
