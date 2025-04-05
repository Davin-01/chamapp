import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Savings from "./pages/Savings";
import Loans from "./pages/Loans";
import Contributions from "./pages/Contributions";
import Meetings from "./pages/Meetings";
import Members from "./pages/Members";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is now included globally */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
