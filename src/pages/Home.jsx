import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center" 
      style={{ backgroundImage: `url(${pic1})` }}>
      
      {/* Overlay for a darkened effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gold drop-shadow-lg">
          Welcome to Our Community
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Empowering financial growth and unity through savings, loans, and investments.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 space-x-4">
          <button 
            onClick={() => navigate("/login")} 
            className="px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Login
          </button>
          <button 
            onClick={() => navigate("/signup")} 
            className="px-6 py-3 bg-transparent border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
