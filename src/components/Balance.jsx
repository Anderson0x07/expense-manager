import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amount = transactions.map((item) => item.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between">
      <h4 className="text-slate-400">Your Balance</h4>
      <h1 className="text-2xl font-bold ">$ {total.toLocaleString()}</h1>
    </div>
  );
};

export default Balance;
