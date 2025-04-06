import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = () => {
    // Simulate login (Replace with API call)
    if (credentials.email && credentials.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${pic1})` }}>
      
      <div className="bg-blue-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 rounded mb-3 text-black" 
          value={credentials.email} 
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} 
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 rounded mb-3 text-black" 
          value={credentials.password} 
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
        />

        <button 
          className="bg-gold text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-400 w-full" 
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-white text-center mt-4">
          Don't have an account? <span className="text-gold cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
