const OfferCard = ({ cardImage, cardHeading, cardText, cardButton }) => {
  return (
    <div>
      <div className="p-5 sm:p-6 bg-slate-100 rounded-lg space-y-4">
        <img src={cardImage} alt="" />
        <h2 className="text-base lg:text-lg font-semibold">{cardHeading}</h2>
        <p className="text-sm lg:text-base">{cardText}</p>
        <div className="flex gap-4">
          <button className="p-2 text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300">
            আরও পড়ুন
          </button>
          {cardButton && (
            <button className="p-2 text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-all duration-300">
              {cardButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
