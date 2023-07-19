import { useGlobalState } from "../../context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  const handleDelete = (id) => {
    deleteTransaction(id)
  };

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button onClick={() => handleDelete(transaction.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
