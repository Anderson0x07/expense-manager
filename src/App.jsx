import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container w-full mx-auto ">
        <div className="text-4xl font-bold text-center my-5 text-white ">
          Expense Manager
        </div>
      </div>
      <div className="bg-zinc-950 text-white  flex justify-center pt-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-2">
          <div className="flex flex-col mx-5">
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex-1 flex flex-col mb-8">
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>

      <footer className="mt-36 shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="block text-sm text-gray-400 text-center dark:text-gray-400">
            © {new Date().getFullYear()} Expense Manager By AndersonDev. All
            Rights Reserved.
          </span>
        </div>
      </footer>
    </GlobalProvider>
  );
}

export default App;
