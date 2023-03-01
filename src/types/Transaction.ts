import TransactionType from "./TransactionType";

interface Transaction {
    date: Date;
    amount: number;
    newTotal: number;
    type: TransactionType;
    description: string;
};export default Transaction;

