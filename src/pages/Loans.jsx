import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Loans = () => {
  const navigate = useNavigate();
  
  // Sample Loan Data
  const [loans, setLoans] = useState([
    { id: 1, borrower: "John Doe", amount: 5000, status: "Pending" },
    { id: 2, borrower: "Jane Smith", amount: 10000, status: "Approved" },
    { id: 3, borrower: "Alice Johnson", amount: 3000, status: "Rejected" },
  ]);
  
  // Search Term
  const [searchTerm, setSearchTerm] = useState("");
  
  // Editable Loan Data
  const [editLoan, setEditLoan] = useState(null);

  // Filtered Loans Based on Search
  const filteredLoans = loans.filter((loan) =>
    loan.borrower.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete Loan
  const handleDelete = (id) => {
    setLoans(loans.filter((loan) => loan.id !== id));
  };

  // Edit Loan
  const handleEdit = (id) => {
    const loanToEdit = loans.find((loan) => loan.id === id);
    setEditLoan(loanToEdit);
  };

  // Save Edited Loan
  const handleSave = () => {
    setLoans(loans.map((loan) => (loan.id === editLoan.id ? editLoan : loan)));
    setEditLoan(null);
  };

  // Chart Data
  const chartData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Loan Requests",
        data: [
          loans.filter((loan) => loan.status === "Approved").length,
          loans.filter((loan) => loan.status === "Pending").length,
          loans.filter((loan) => loan.status === "Rejected").length,
        ],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
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
        <h1 className="text-3xl font-bold text-gold mb-6 text-center">Loans</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search borrower..."
          className="w-full p-2 rounded text-black mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Loan List */}
        <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gold mb-3">Loan Records</h2>
          <ul>
            {filteredLoans.map((loan) => (
              <li
                key={loan.id}
                className="flex justify-between items-center border-b border-gray-400 py-2"
              >
                {editLoan?.id === loan.id ? (
                  <input
                    type="number"
                    className="p-1 rounded text-black"
                    value={editLoan.amount}
                    onChange={(e) =>
                      setEditLoan({ ...editLoan, amount: e.target.value })
                    }
                  />
                ) : (
                  <span>Ksh {loan.amount.toLocaleString()}</span>
                )}
                <span>{loan.borrower}</span>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    loan.status === "Approved"
                      ? "bg-green-500"
                      : loan.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {loan.status}
                </span>
                <div className="flex gap-2">
                  {editLoan?.id === loan.id ? (
                    <button
                      onClick={handleSave}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(loan.id)}
                      className="px-3 py-1 bg-yellow-500 text-black rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(loan.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Chart */}
        <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gold mb-3">Loan Statistics</h2>
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

export default Loans;
