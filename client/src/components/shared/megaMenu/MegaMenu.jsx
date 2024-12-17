import { Link } from "react-router-dom";

const MegaMenu = ({ items }) => {
  return (
    <div className="bg-[#333] container mx-auto">
      <div className="grid gap-8 grid-cols-5 px-4 sm:px-10 lg:px-24">
        {items?.map((item) => (
          <Link key={item} to={item.route}>
            <img
              className="w-28 transition-all duration-300 hover:scale-110"
              src={item.image}
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
