const DashboardCard = ({ title, amount, color }) => {
    return (
      <div className={`p-5 rounded-lg shadow-md text-white ${color} flex-1`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold mt-2">Ksh {amount}</p>
      </div>
    );
  };
  
  export default DashboardCard;
  