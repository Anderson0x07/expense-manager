import { useGlobalState } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((item) => item.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income.toLocaleString()}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p>{expense.toLocaleString()}</p>
      </div>
    </>
  );
};

export default IncomeExpenses;
