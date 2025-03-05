import { Link } from "react-router-dom";

const QuickLink = ({ title, link, color }) => {
  return (
    <Link to={link} className={`p-6 rounded-lg shadow-lg text-center text-lg font-bold ${color}`}>
      {title}
    </Link>
  );
};

export default QuickLink;
