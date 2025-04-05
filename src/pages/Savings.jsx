import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2"; // Import Bar Chart
import "chart.js/auto"; // Required for Chart.js v3+
import pic1 from "../assets/pic1.jpg";

const Savings = () => {
  const navigate = useNavigate();

  // Sample savings data
  const [savings, setSavings] = useState([
    { id: 1, name: "John Doe", amount: 5000, date: "March 15, 2025" },
    { id: 2, name: "Jane Smith", amount: 3500, date: "April 5, 2025" },
  ]);

  const [newSaving, setNewSaving] = useState({ name: "", amount: "" });
  const [editing, setEditing] = useState(null);

  // Add New Saving
  const handleAddSaving = () => {
    if (newSaving.name && newSaving.amount) {
      setSavings([
        ...savings,
        {
          id: savings.length + 1,
          ...newSaving,
          date: new Date().toDateString(),
        },
      ]);
      setNewSaving({ name: "", amount: "" });
    }
  };

  // Delete Saving
  const handleDelete = (id) => {
    setSavings(savings.filter((saving) => saving.id !== id));
  };

  // Edit Saving
  const handleEdit = (id) => {
    const savingToEdit = savings.find((saving) => saving.id === id);
    setEditing(id);
    setNewSaving({ name: savingToEdit.name, amount: savingToEdit.amount });
  };

  // Save Edited Saving
  const handleSaveEdit = () => {
    setSavings(
      savings.map((saving) =>
        saving.id === editing
          ? { ...saving, name: newSaving.name, amount: newSaving.amount }
          : saving
      )
    );
    setEditing(null);
    setNewSaving({ name: "", amount: "" });
  };

  // Graph Data
  const chartData = {
    labels: savings.map((saving) => saving.date),
    datasets: [
      {
        label: "Savings Growth (Ksh)",
        data: savings.map((saving) => saving.amount),
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center bg-cover bg-center text-white p-8"
      style={{ backgroundImage: `url(${pic1})` }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gold mb-6">Savings</h1>

        {/* Total Savings */}
        <div className="bg-blue-800 text-center p-6 rounded-lg shadow-lg bg-opacity-90">
          <h2 className="text-2xl font-bold">Total Savings</h2>
          <p className="text-3xl font-bold mt-2">
            Ksh {savings.reduce((total, item) => total + item.amount, 0).toLocaleString()}
          </p>
        </div>

        {/* Savings List */}
        <div className="mt-6 bg-blue-800 p-4 rounded-lg shadow-lg bg-opacity-90">
          <h2 className="text-xl font-bold text-gold mb-3">Recent Savings</h2>
          <ul>
            {savings.map((saving) => (
              <li key={saving.id} className="flex justify-between items-center py-2 border-b border-gray-400">
                <span>{saving.name}</span>
                <span>Ksh {saving.amount.toLocaleString()}</span>
                <span className="text-sm text-gray-300">{saving.date}</span>
                <button className="text-yellow-400 ml-2" onClick={() => handleEdit(saving.id)}>✏️</button>
                <button className="text-red-400 ml-2" onClick={() => handleDelete(saving.id)}>🗑️</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Add or Edit Savings Form */}
        <div className="mt-6 bg-blue-800 p-6 rounded-lg shadow-lg bg-opacity-90">
          <h2 className="text-xl font-bold text-gold mb-3">
            {editing ? "Edit Savings" : "Add Savings"}
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded mb-2 text-black"
            value={newSaving.name}
            onChange={(e) => setNewSaving({ ...newSaving, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Amount (Ksh)"
            className="w-full p-2 rounded mb-2 text-black"
            value={newSaving.amount}
            onChange={(e) => setNewSaving({ ...newSaving, amount: Number(e.target.value) })}
          />
          <button
            className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full"
            onClick={editing ? handleSaveEdit : handleAddSaving}
          >
            {editing ? "Save Changes" : "Submit Savings"}
          </button>
        </div>

        {/* Savings Growth Chart */}
        <div className="mt-6 bg-blue-800 p-6 rounded-lg shadow-lg bg-opacity-90">
          <h2 className="text-xl font-bold text-gold mb-3">Savings Growth</h2>
          <Bar data={chartData} />
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Savings;
