import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contributions = () => {
  const navigate = useNavigate();
  const [contributions, setContributions] = useState([
    { id: 1, name: "John Doe", amount: 2000, date: "April 1, 2025" },
    { id: 2, name: "Jane Smith", amount: 1500, date: "April 3, 2025" },
  ]);
  const [newContribution, setNewContribution] = useState({ name: "", amount: "" });

  const handleAddContribution = () => {
    if (newContribution.name && newContribution.amount > 0) {
      setContributions([
        ...contributions,
        {
          id: contributions.length + 1,
          ...newContribution,
          amount: parseFloat(newContribution.amount), // Ensure numeric value
          date: new Date().toDateString(),
        },
      ]);
      setNewContribution({ name: "", amount: "" }); // Reset form
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold text-gold mb-6">Contributions</h1>

      {/* Total Contributions Display */}
      <div className="bg-blue-700 text-center p-6 rounded-lg shadow-lg w-full max-w-md mb-6">
        <h2 className="text-2xl font-bold">Total Contributions</h2>
        <p className="text-3xl font-bold mt-2">
          Ksh {contributions.reduce((total, item) => total + item.amount, 0).toLocaleString()}
        </p>
      </div>

      {/* Contributions List */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-gold mb-3">Recent Contributions</h2>
        <ul className="bg-blue-700 p-4 rounded-lg shadow-lg">
          {contributions.map((contribution) => (
            <li 
              key={contribution.id} 
              className="flex justify-between py-2 border-b border-gray-400 hover:bg-blue-800 transition duration-300 px-3 rounded"
            >
              <span>{contribution.name}</span>
              <span>Ksh {contribution.amount.toLocaleString()}</span>
              <span className="text-sm text-gray-300">{contribution.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contribution Form */}
      <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gold mb-3">Add a Contribution</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded mb-3 text-black"
          value={newContribution.name}
          onChange={(e) => setNewContribution({ ...newContribution, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount (Ksh)"
          className="w-full p-2 rounded mb-3 text-black"
          value={newContribution.amount}
          onChange={(e) => setNewContribution({ 
            ...newContribution, 
            amount: parseFloat(e.target.value) || 0 
          })}
        />
        <button
          className={`font-bold px-4 py-2 rounded w-full transition duration-300 ${
            newContribution.name && newContribution.amount > 0 
              ? "bg-gold text-black hover:bg-yellow-400 shadow-lg" 
              : "bg-gray-500 cursor-not-allowed"
          }`}
          onClick={handleAddContribution}
          disabled={!newContribution.name || newContribution.amount <= 0}
        >
          Submit Contribution
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

export default Contributions;
