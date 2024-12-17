const HomeMobileButton = ({ image, title }) => {
  return (
    <button className="min-w-[74px] text-left whitespace-nowrap p-2 text-xs font-medium rounded-sm text-white hover:text-black bg-gray-700 hover:bg-yellow-400 transition-all duration-300">
      <img className="w-7 mb-1" src={image} alt="" />
      {title}
    </button>
  );
};

export default HomeMobileButton;
