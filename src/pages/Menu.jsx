import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const menuOptions = [
    { title: "Savings", path: "/savings" },
    { title: "Loans", path: "/loans" },
    { title: "Contributions", path: "/contributions" },
    { title: "Meetings", path: "/meetings" },
    { title: "Members", path: "/members" },
    { title: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold text-gold mb-6">Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {menuOptions.map((option, index) => (
          <div
            key={index}
            className="bg-blue-700 hover:bg-gold text-center p-6 rounded-lg shadow-lg cursor-pointer transition duration-300"
            onClick={() => navigate(option.path)}
          >
            <h2 className="text-xl font-bold">{option.title}</h2>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Menu;
