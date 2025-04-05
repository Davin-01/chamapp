import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1
          className="text-2xl font-bold cursor-pointer text-gold"
          onClick={() => navigate("/dashboard")}
        >
          ChamaApp
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="hover:text-gold transition">Dashboard</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-gold transition">Menu</Link>
          </li>
          <li>
            <Link to="/savings" className="hover:text-gold transition">Savings</Link>
          </li>
          <li>
            <Link to="/loans" className="hover:text-gold transition">Loans</Link>
          </li>
          <li>
            <Link to="/contributions" className="hover:text-gold transition">Contributions</Link>
          </li>
          <li>
            <Link to="/meetings" className="hover:text-gold transition">Meetings</Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={() => navigate("/login")}
          className="bg-gold text-black px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-yellow-400 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
