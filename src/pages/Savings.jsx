import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Savings = () => {
  const navigate = useNavigate();
  const [savings, setSavings] = useState([
    { id: 1, name: "John Rawen", amount: 5000, date: "March 1, 2025" },
    { id: 2, name: "Jane Ogolla", amount: 3000, date: "March 3, 2025" },
  ]);
  const [newSavings, setNewSavings] = useState({ name: "", amount: "" });

  const handleAddSavings = () => {
    if (newSavings.name && newSavings.amount) {
      setSavings([
        ...savings,
        { id: savings.length + 1, ...newSavings, date: new Date().toDateString() },
      ]);
      setNewSavings({ name: "", amount: "" }); // Reset form
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold text-gold mb-6">Savings</h1>

      {/* Total Savings Display */}
      <div className="bg-blue-700 text-center p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold">Total Savings</h2>
        <p className="text-3xl font-bold mt-2">
          Ksh {savings.reduce((total, item) => total + item.amount, 0).toLocaleString()}
        </p>
      </div>

      {/* Savings List */}
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gold mb-3">Recent Contributions</h2>
        <ul className="bg-blue-700 p-4 rounded-lg shadow-lg">
          {savings.map((entry) => (
            <li key={entry.id} className="flex justify-between py-2 border-b border-gray-400">
              <span>{entry.name}</span>
              <span>Ksh {entry.amount.toLocaleString()}</span>
              <span className="text-gray-300 text-sm">{entry.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Savings Form */}
      <div className="mt-6 bg-blue-700 p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gold mb-3">Add Contribution</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded mb-2 text-black"
          value={newSavings.name}
          onChange={(e) => setNewSavings({ ...newSavings, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount (Ksh)"
          className="w-full p-2 rounded mb-2 text-black"
          value={newSavings.amount}
          onChange={(e) => setNewSavings({ ...newSavings, amount: Number(e.target.value) })}
        />
        <button
          className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full"
          onClick={handleAddSavings}
        >
          Add Savings
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

export default Savings;
