import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSignUp = () => {
    // Simulate signup (Replace with API call)
    if (user.name && user.email && user.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${pic1})` }}>
      
      <div className="bg-blue-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>

        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-3 rounded mb-3 text-black" 
          value={user.name} 
          onChange={(e) => setUser({ ...user, name: e.target.value })} 
        />

        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 rounded mb-3 text-black" 
          value={user.email} 
          onChange={(e) => setUser({ ...user, email: e.target.value })} 
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 rounded mb-3 text-black" 
          value={user.password} 
          onChange={(e) => setUser({ ...user, password: e.target.value })} 
        />

        <button 
          className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full" 
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p className="text-white text-center mt-4">
          Already have an account? <span className="text-gold cursor-pointer" onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
