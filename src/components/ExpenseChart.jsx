import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
import { BsPieChartFill } from "react-icons/bs";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const total = transactions.reduce((acc, item) => (acc += item.amount), 0);

  const incomes = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0);

  const expenses =
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0) * -1;

  const totalExpensesPercentage = Math.round((expenses / incomes) * 100);
  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  if (incomes === 0 && expenses === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <BsPieChartFill className="text-7xl" />
          <h1 className="text-3xl font-bold my-2 text-center">No data yet</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950">
      <VictoryPie
        colorScale={["red", "green"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentage },
          { x: "Incomes", y: totalIncomesPercentage },
        ]}
        animate={{
          duration: 200,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={
          <VictoryLabel
            angle={0}
            style={{
              fill: "white",
            }}
          />
        }
      />
    </div>
  );
};

export default ExpenseChart;
