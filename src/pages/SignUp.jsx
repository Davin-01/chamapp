import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signing up with:", formData);
    // Implement registration logic
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${pic1})` }}>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative w-full max-w-md p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold text-center text-gold">Sign Up</h2>

        <form className="mt-6" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-transparent border border-gray-300 focus:outline-none focus:border-gold text-white"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-transparent border border-gray-300 focus:outline-none focus:border-gold text-white"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-transparent border border-gray-300 focus:outline-none focus:border-gold text-white"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gold text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <span className="text-gold cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
