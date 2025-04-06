import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Contributions = () => {
  const navigate = useNavigate();

  // Sample Contribution Data
  const [contributions, setContributions] = useState([
    { id: 1, member: "John Doe", amount: 5000, date: "2025-04-05" },
    { id: 2, member: "Jane Smith", amount: 10000, date: "2025-04-10" },
    { id: 3, member: "Alice Johnson", amount: 3000, date: "2025-04-15" },
  ]);

  // Search Term
  const [searchTerm, setSearchTerm] = useState("");

  // Editable Contribution Data
  const [editContribution, setEditContribution] = useState(null);

  // Filter Contributions Based on Search
  const filteredContributions = contributions.filter((contribution) =>
    contribution.member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete Contribution
  const handleDelete = (id) => {
    setContributions(contributions.filter((contribution) => contribution.id !== id));
  };

  // Edit Contribution
  const handleEdit = (id) => {
    const contributionToEdit = contributions.find((contribution) => contribution.id === id);
    setEditContribution(contributionToEdit);
  };

  // Save Edited Contribution
  const handleSave = () => {
    setContributions(
      contributions.map((contribution) =>
        contribution.id === editContribution.id ? editContribution : contribution
      )
    );
    setEditContribution(null);
  };

  // Calculate Total Contributions
  const totalContributions = contributions.reduce((sum, c) => sum + c.amount, 0);

  // Chart Data
  const chartData = {
    labels: contributions.map((c) => c.member),
    datasets: [
      {
        label: "Contributions",
        data: contributions.map((c) => c.amount),
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336", "#2196F3", "#9C27B0"],
      },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-30"
        style={{ backgroundImage: `url(${pic1})` }}
      ></div>

      {/* Page Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gold mb-6 text-center">Contributions</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search member..."
          className="w-full p-2 rounded text-black mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Total Contributions */}
        <div className="mb-4 text-lg font-bold text-center">
          Total Contributions: <span className="text-gold">Ksh {totalContributions.toLocaleString()}</span>
        </div>

        {/* Contributions List */}
        <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gold mb-3">Contribution Records</h2>
          <ul>
            {filteredContributions.map((contribution) => (
              <li
                key={contribution.id}
                className="flex justify-between items-center border-b border-gray-400 py-2"
              >
                {editContribution?.id === contribution.id ? (
                  <input
                    type="number"
                    className="p-1 rounded text-black"
                    value={editContribution.amount}
                    onChange={(e) =>
                      setEditContribution({ ...editContribution, amount: e.target.value })
                    }
                  />
                ) : (
                  <span>Ksh {contribution.amount.toLocaleString()}</span>
                )}
                <span>{contribution.member}</span>
                <span>{contribution.date}</span>
                <div className="flex gap-2">
                  {editContribution?.id === contribution.id ? (
                    <button
                      onClick={handleSave}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(contribution.id)}
                      className="px-3 py-1 bg-yellow-500 text-black rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(contribution.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contribution Chart */}
        <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gold mb-3">Contribution Statistics</h2>
          <Bar data={chartData} />
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 w-full"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Contributions;
