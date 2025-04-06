import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gold">
          Chama360
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gold">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-gold">Dashboard</Link></li>
          {/* <li><Link to="/savings" className="hover:text-gold">Savings</Link></li>
          <li><Link to="/loans" className="hover:text-gold">Loans</Link></li>
          <li><Link to="/contributions" className="hover:text-gold">Contributions</Link></li>
          <li><Link to="/meetings" className="hover:text-gold">Meetings</Link></li>
          <li><Link to="/members" className="hover:text-gold">Members</Link></li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white p-4 mt-2 space-y-3">
          <Link to="/" className="block hover:text-gold">Home</Link>
          <Link to="/dashboard" className="block hover:text-gold">Dashboard</Link>
          {/* <Link to="/savings" className="block hover:text-gold">Savings</Link>
          <Link to="/loans" className="block hover:text-gold">Loans</Link>
          <Link to="/contributions" className="block hover:text-gold">Contributions</Link>
          <Link to="/meetings" className="block hover:text-gold">Meetings</Link>
          <Link to="/members" className="block hover:text-gold">Members</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
