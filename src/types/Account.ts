import { AccountType } from "./AccountType";
import Transaction from "./Transaction";

type Account = {
    accountNumber:string;
    accountName:string;
    accountType:AccountType
    balance:number;
    ledger:Transaction[];
}

export default Account;