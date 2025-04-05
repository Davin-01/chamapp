import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigate = useNavigate();

  // Sample Member Data
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", role: "Chairperson", contact: "0712 345 678" },
    { id: 2, name: "Jane Smith", role: "Treasurer", contact: "0723 456 789" },
    { id: 3, name: "Michael Otieno", role: "Secretary", contact: "0734 567 890" },
  ]);

  const [newMember, setNewMember] = useState({ name: "", role: "", contact: "" });
  const [search, setSearch] = useState("");

  // Add New Member
  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.contact) {
      setMembers([...members, { id: members.length + 1, ...newMember }]);
      setNewMember({ name: "", role: "", contact: "" });
    }
  };

  // Filter Members by Search
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold text-gold mb-6">Chama Members</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Members..."
        className="w-full max-w-md p-2 rounded mb-4 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Members List */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-blue-700 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gold">{member.name}</h3>
            <p className="text-gray-300">Role: {member.role}</p>
            <p className="text-gray-300">Contact: {member.contact}</p>
          </div>
        ))}
      </div>

      {/* Add Member Form */}
      <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg w-full max-w-md">
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
          type="text"
          placeholder="Contact"
          className="w-full p-2 rounded mb-2 text-black"
          value={newMember.contact}
          onChange={(e) => setNewMember({ ...newMember, contact: e.target.value })}
        />
        <button
          className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full"
          onClick={handleAddMember}
        >
          Add Member
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

export default Members;
