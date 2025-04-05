import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loans = () => {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([
    { id: 1, name: "John ", amount: 10000, date: "March 5, 2025", status: "Approved" },
    { id: 2, name: "William", amount: 5000, date: "March 10, 2025", status: "Pending" },
  ]);
  const [newLoan, setNewLoan] = useState({ name: "", amount: "" });

  const handleRequestLoan = () => {
    if (newLoan.name && newLoan.amount) {
      setLoans([
        ...loans,
        {
          id: loans.length + 1,
          ...newLoan,
          date: new Date().toDateString(),
          status: "Pending",
        },
      ]);
      setNewLoan({ name: "", amount: "" }); // Reset form
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold text-gold mb-6">Loans</h1>

      {/* Total Loans Display */}
      <div className="bg-blue-700 text-center p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold">Total Borrowed</h2>
        <p className="text-3xl font-bold mt-2">
          Ksh {loans.reduce((total, item) => total + item.amount, 0).toLocaleString()}
        </p>
      </div>

      {/* Loans List */}
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gold mb-3">Recent Loan Requests</h2>
        <ul className="bg-blue-700 p-4 rounded-lg shadow-lg">
          {loans.map((loan) => (
            <li key={loan.id} className="flex justify-between py-2 border-b border-gray-400">
              <span>{loan.name}</span>
              <span>Ksh {loan.amount.toLocaleString()}</span>
              <span className={`text-sm ${loan.status === "Approved" ? "text-green-400" : "text-yellow-400"}`}>
                {loan.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Request Loan Form */}
      <div className="mt-6 bg-blue-700 p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gold mb-3">Request a Loan</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded mb-2 text-black"
          value={newLoan.name}
          onChange={(e) => setNewLoan({ ...newLoan, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount (Ksh)"
          className="w-full p-2 rounded mb-2 text-black"
          value={newLoan.amount}
          onChange={(e) => setNewLoan({ ...newLoan, amount: Number(e.target.value) })}
        />
        <button
          className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full"
          onClick={handleRequestLoan}
        >
          Request Loan
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/menu")}
        className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400"
      >
        Back to Menu
      </button>
    </div>
  );
};

export default Loans;
