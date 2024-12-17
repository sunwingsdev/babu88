const Banner = ({ B_image, B_heading, B_semiText, B_text }) => {
  return (
    <div>
      <div className="md:block hidden relative">
        <img className="w-full" src={B_image} alt="" />
        <div className="absolute top-6 xl:top-16 left-10 max-w-[600px] text-white">
          <h2 className="text-2xl font-semibold">{B_heading}</h2>
          <h3 className="text-xl font-semibold">{B_semiText}</h3>
          <p className="mt-2 text-xs font-semibold">{B_text}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
