import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg"; // Background image
// import pic1 from "../assets/pic1.jpg"; // Image 1
import pic2 from "../assets/pic2.jpg"; // Image 2
import pic3 from "../assets/pic3.jpg"; // Image 3

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Card Section - Now at the Top */}
      <div className="relative z-10 flex justify-center pt-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {/* Card 1 */}
          <div className="bg-gray-400 text-black rounded-lg shadow-lg p-4 text-center">
            <img src={pic2} alt="Happy gathering" className="w-full rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Stronger Together</h3>
            <p className="text-sm mt-2">
              Our members come together to save, invest, and uplift each other financially.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-400 text-black rounded-lg shadow-lg p-4 text-center">
            <img src={pic3} alt="Happy meeting" className="w-full rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Smart Financial Growth</h3>
            <p className="text-sm mt-2">
              We believe in financial discipline and group investments for a brighter future.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-400 text-black rounded-lg shadow-lg p-4 text-center">
            <img src={pic2} alt="Happy members" className="w-full rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Community & Support</h3>
            <p className="text-sm mt-2">
              Every member matters! We provide a support system that encourages growth.
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Message and Menu Button - Now at the Bottom */}
      <div className="relative z-10 flex flex-col items-center text-white text-center p-8 mt-6">
        <h1 className="text-4xl font-bold text-gold">Welcome to Chama360</h1>
        <p className="mt-4 max-w-2xl text-lg">
          Chama360 is a simple and secure way for members to manage their savings, 
          loans, and contributions transparently. Join us in building financial strength 
          through collective investments and support.
        </p>

        {/* Button to Navigate to Menu Page */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 px-6 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400"
        >
          Go to Menu
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
