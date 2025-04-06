import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Members = () => {
  const navigate = useNavigate();

  // Sample Member Data
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", role: "Chairperson", joined: "2024-01-15" },
    { id: 2, name: "Jane Smith", role: "Treasurer", joined: "2024-02-20" },
    { id: 3, name: "Mike Johnson", role: "Member", joined: "2024-03-10" },
  ]);

  // Search Term
  const [searchTerm, setSearchTerm] = useState("");

  // New Member Form
  const [newMember, setNewMember] = useState({ name: "", role: "", joined: "" });

  // Editable Member Data
  const [editMember, setEditMember] = useState(null);

  // Filtered Members
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add New Member
  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.joined) {
      setMembers([...members, { id: members.length + 1, ...newMember }]);
      setNewMember({ name: "", role: "", joined: "" });
    }
  };

  // Delete Member
  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  // Edit Member
  const handleEdit = (id) => {
    const memberToEdit = members.find((member) => member.id === id);
    setEditMember(memberToEdit);
  };

  // Save Edited Member
  const handleSave = () => {
    setMembers(
      members.map((member) =>
        member.id === editMember.id ? editMember : member
      )
    );
    setEditMember(null);
  };

  // Chart Data
  const roleCounts = members.reduce((acc, member) => {
    acc[member.role] = (acc[member.role] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: "Members by Role",
        data: Object.values(roleCounts),
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
      <div className="relative z-10 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-gold mb-6 text-center">Members</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search member..."
          className="w-full p-2 rounded text-black mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Members Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-blue-700 p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-bold text-gold">{member.name}</h3>
              <p><strong>Role:</strong> {member.role}</p>
              <p><strong>Joined:</strong> {member.joined}</p>
              
              <div className="flex justify-end gap-2 mt-3">
                {editMember?.id === member.id ? (
                  <button onClick={handleSave} className="px-3 py-1 bg-green-500 text-white rounded">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(member.id)} className="px-3 py-1 bg-yellow-500 text-black rounded">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(member.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Member Form */}
        <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gold mb-3">Add New Member</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 rounded mb-2 text-black"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="w-full p-2 rounded mb-2 text-black"
            value={newMember.role}
            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          />
          <input
            type="date"
            className="w-full p-2 rounded mb-2 text-black"
            value={newMember.joined}
            onChange={(e) => setNewMember({ ...newMember, joined: e.target.value })}
          />
          <button
            className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full"
            onClick={handleAddMember}
          >
            Add Member
          </button>
        </div>

       {/* Membership Chart */}
<div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
  <h2 className="text-xl font-bold text-gold mb-3">Membership Overview</h2>
  <div className="w-[300px] h-[300px]">
    <Pie data={chartData} />
  </div>
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

export default Members;
