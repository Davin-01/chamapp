import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Meetings = () => {
  const navigate = useNavigate();

  // Sample Meetings Data
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Monthly Chama Meeting", date: "2025-04-10", time: "15:00", agenda: "Financial Review & Future Plans" },
    { id: 2, title: "Special Investment Meeting", date: "2025-04-25", time: "17:00", agenda: "New Business Opportunities" },
  ]);

  // Search Term
  const [searchTerm, setSearchTerm] = useState("");

  // Editable Meeting Data
  const [editMeeting, setEditMeeting] = useState(null);

  // Filter Meetings
  const filteredMeetings = meetings.filter((meeting) =>
    meeting.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete Meeting
  const handleDelete = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  // Edit Meeting
  const handleEdit = (id) => {
    const meetingToEdit = meetings.find((meeting) => meeting.id === id);
    setEditMeeting(meetingToEdit);
  };

  // Save Edited Meeting
  const handleSave = () => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === editMeeting.id ? editMeeting : meeting
      )
    );
    setEditMeeting(null);
  };

  // Chart Data
  const chartData = {
    labels: meetings.map((m) => m.date),
    datasets: [
      {
        label: "Meetings Scheduled",
        data: meetings.map(() => 1), // Representing number of meetings on each date
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
        <h1 className="text-3xl font-bold text-gold mb-6 text-center">Meetings</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search meeting..."
          className="w-full p-2 rounded text-black mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Meetings List in Card Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMeetings.map((meeting) => (
            <div key={meeting.id} className="bg-blue-700 p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-bold text-gold">{meeting.title}</h3>
              <p><strong>Date:</strong> {meeting.date}</p>
              <p><strong>Time:</strong> {meeting.time}</p>
              <p><strong>Agenda:</strong> {meeting.agenda}</p>
              
              <div className="flex justify-end gap-2 mt-3">
                {editMeeting?.id === meeting.id ? (
                  <button onClick={handleSave} className="px-3 py-1 bg-green-500 text-white rounded">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(meeting.id)} className="px-3 py-1 bg-yellow-500 text-black rounded">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(meeting.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Meeting Summary Chart */}
        {/* <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gold mb-3">Meeting Schedule Overview</h2>
          <Bar data={chartData} />
        </div> */}

        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 align-self-center"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Meetings;
