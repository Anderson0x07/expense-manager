import { useGlobalState } from "../../context/GlobalState";

import {BiTrash} from 'react-icons/bi'

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <li className={`text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center` + 
                ` ${transaction.amount < 0 ? "bg-red-700" : "bg-green-700"}`}>
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>{sign} ${Math.abs(transaction.amount)}</span>
        <button onClick={() => handleDelete(transaction.id)} className="font-bold text-white rounded-lg ml-2">
            <BiTrash />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
