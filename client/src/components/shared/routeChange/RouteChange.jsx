import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const RouteChange = ({ text }) => {
  return (
    <div>
      <div className="md:hidden text-yellow-400 bg-black p-3 flex items-center justify-between">
        <FaCaretLeft size={20} />
        <h2 className="text-center text-xl font-medium">{text}</h2>
        <FaCaretRight size={20} />
      </div>
    </div>
  );
};

export default RouteChange;
