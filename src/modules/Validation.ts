import ValidationResult from "../types/ValidationResult";

export interface Validation {
    isValid: (x: number) => ValidationResult
}

export namespace Validation {
  export const msg_notGreaterThanZero =
    "Must provide a value greater than zero";
  export const msg_insufficientFunds = "Insufficient Funds";
  export const msg_notMultipleOfTwenty =
    "This ATM can only dispense multiples of $20";

  export function wontOverdraft(
    val: number,
    balance: number
  ): ValidationResult {
    const passes = val <= balance;
    const message = passes ? "" : msg_insufficientFunds;

    return { passes, message };
  }

  export function isIncrementOfTwenty(val: number): ValidationResult {
    console.log(`${val} % 20 = ${val % 20}`);
    const passes = val === undefined || val % 20 === 0;
    const message = passes ? "" : msg_notMultipleOfTwenty;

    return { passes, message };
  }

  export function isGreaterThenZero(val: number): ValidationResult {
    const passes = val > 0;
    const message = passes ? "" : msg_notGreaterThanZero;

    return { passes, message };
  }
}
