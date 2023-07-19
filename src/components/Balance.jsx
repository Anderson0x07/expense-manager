import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amount = transactions.map((item) => item.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="flex justify-between">
      <h3>Your Balance</h3>
      <h1 className="text-2xl font-bold ">$ {total.toLocaleString()}</h1>
    </div>
  );
};

export default Balance;
