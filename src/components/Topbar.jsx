const Topbar = () => {
    return (
      <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-deepBlue">Welcome to Chama Platform</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">John Doe</span>
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    );
  };
  
  export default Topbar;
  