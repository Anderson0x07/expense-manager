import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button onClick={() => handleDelete(transaction.id)}>X</button>
      </div>
    </li>
  );
};

export default TransactionItem;