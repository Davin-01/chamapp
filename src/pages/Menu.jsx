import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg"; // Make sure you have a relevant image in the assets folder

const Menu = () => {
  const navigate = useNavigate();

  const menuOptions = [
    { title: "Savings", path: "/savings" },
    { title: "Loans", path: "/loans" },
    { title: "Contributions", path: "/contributions" },
    { title: "Meetings", path: "/meetings" },
    { title: "Members", path: "/members" },
    
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-8"
      style={{ backgroundImage: `url(${pic1})` }}
    >
      <div className="bg-blue-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-gold mb-6">Chama Menu</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className="bg-blue-700 hover:bg-gold hover:text-black text-center p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 transform hover:scale-105"
              onClick={() => navigate(option.path)}
            >
              <h2 className="text-xl font-bold">{option.title}</h2>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Menu;
