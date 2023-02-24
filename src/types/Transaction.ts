import TransactionType from "./TransactionType";

type Transaction = {
    date: Date;
    amount: number;
    newTotal: number;
    type: TransactionType;
    description: string;
};export default Transaction;

