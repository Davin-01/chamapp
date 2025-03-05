import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-deepBlue">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-deepBlue">Login</h2>
        <form className="mt-6">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full mt-6 bg-gold text-white py-2 rounded-lg hover:bg-yellow-500">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-gold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
