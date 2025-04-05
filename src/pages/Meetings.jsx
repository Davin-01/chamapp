import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Meetings = () => {
  const navigate = useNavigate();
  
  // Sample meeting data
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Monthly Chama Meeting", date: "April 10, 2025", time: "3:00 PM", agenda: "Financial Review & Future Plans" },
    { id: 2, title: "Special Investment Meeting", date: "April 25, 2025", time: "5:00 PM", agenda: "New Business Opportunities" },
  ]);
  
  // Form State
  const [newMeeting, setNewMeeting] = useState({ title: "", date: "", time: "", agenda: "" });

  // Add New Meeting
  const handleAddMeeting = () => {
    if (newMeeting.title && newMeeting.date && newMeeting.time && newMeeting.agenda) {
      setMeetings([
        ...meetings,
        { id: meetings.length + 1, ...newMeeting },
      ]);
      setNewMeeting({ title: "", date: "", time: "", agenda: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold text-gold mb-6">Meetings</h1>

      {/* Upcoming Meetings List */}
      <div className="bg-blue-700 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gold mb-3">Upcoming Meetings</h2>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id} className="border-b border-gray-400 py-3">
              <h3 className="text-xl font-semibold">{meeting.title}</h3>
              <p><strong>Date:</strong> {meeting.date}</p>
              <p><strong>Time:</strong> {meeting.time}</p>
              <p><strong>Agenda:</strong> {meeting.agenda}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Meeting */}
      <div className="mt-6 bg-blue-700 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold text-gold mb-3">Schedule a Meeting</h2>
        <input
          type="text"
          placeholder="Meeting Title"
          className="w-full p-2 rounded mb-2 text-black"
          value={newMeeting.title}
          onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 rounded mb-2 text-black"
          value={newMeeting.date}
          onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
        />
        <input
          type="time"
          className="w-full p-2 rounded mb-2 text-black"
          value={newMeeting.time}
          onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
        />
        <textarea
          placeholder="Agenda"
          className="w-full p-2 rounded mb-2 text-black"
          value={newMeeting.agenda}
          onChange={(e) => setNewMeeting({ ...newMeeting, agenda: e.target.value })}
        />
        <button
          className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full"
          onClick={handleAddMeeting}
        >
          Add Meeting
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

export default Meetings;
