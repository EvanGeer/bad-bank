import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountContext from "../contexts/accountContext";
import Account from "../types/Account";
import PrimaryButton from "./PrimayButton";

export function TransactForm({
  transaction,
  validations,
}: {
  transaction: (a: Account, x: number) => {};
  validations: ((x: number) => { passes: boolean; message: string })[];
}) {
  const [value, setValue] = useState<number | string>("");
  const [isInValid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { account, setAccount } = useContext(AccountContext);

  useEffect(() => {
    // this is needed for when we navigate via the router
    // from deposit to withdrawal, since they are the same component
    handleValidation();
  });

  const handleValidation = () => {
    if (!value) {
      setIsInvalid(true);
      setErrorMessage("");
      return;
    }

    const failedValidation = validations
      .map((x) => x(Number(value)))
      .find((x) => !x.passes);

    setIsInvalid(failedValidation ? true : false);
    setErrorMessage(failedValidation?.message ?? "");

    console.log(isInValid);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const submitOnEnterKey = (e: any) => {
    if (e.which !== 13) return;
    handleSubmit();
  };

  const handleSubmit = () => {
    if (isInValid) return;

    const updatedAccount = transaction(account, Number(value));
    setAccount(updatedAccount);
  };

  const history = useNavigate();

  return (
    <>
      {/* Text Entry */}
      <div className="grid-container">
        <input
          className={`t-entry${!isInValid ? "" : " invalid"}`}
          type="number"
          placeholder="0.00"
          value={value}
          onChange={handleChange}
          onKeyDown={submitOnEnterKey}
        />
      </div>
      {/* Validation Message */}
      {isInValid ? <div className="error">{errorMessage}</div> : null}

      {/* Buttons */}
      <div className="row">
        <PrimaryButton text="Go Back" action={() => history(-1)} />
        <PrimaryButton text="Okay" disabled={isInValid} action={handleSubmit} />
      </div>
    </>
  );
}
