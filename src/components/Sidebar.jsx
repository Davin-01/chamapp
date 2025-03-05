import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-deepBlue text-white fixed p-5">
      <h2 className="text-2xl font-bold text-gold mb-6">Chama Platform</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gold hover:text-deepBlue">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/contributions" className="block py-2 px-4 rounded hover:bg-gold hover:text-deepBlue">
            Contributions
          </Link>
        </li>
        <li>
          <Link to="/loans" className="block py-2 px-4 rounded hover:bg-gold hover:text-deepBlue">
            Loans
          </Link>
        </li>
        <li>
          <Link to="/members" className="block py-2 px-4 rounded hover:bg-gold hover:text-deepBlue">
            Members
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gold hover:text-deepBlue">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
