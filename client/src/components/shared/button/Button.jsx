const Button = ({ nameText }) => {
  return (
    <div>
      <button className="py-2 px-4 xl:px-6 whitespace-nowrap text-base font-semibold hover:bg-yellow-400 rounded-full transition-all duration-500">
        {nameText}
      </button>
    </div>
  );
};

export default Button;
