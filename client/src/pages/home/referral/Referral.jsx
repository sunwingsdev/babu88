const Referral = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-4 sm:px-10 lg:px-24 space-y-4">
        <div className="p-5 md:p-10 bg-white border border-gray-400 rounded-3xl space-y-4">
          <div className="relative">
            <img
              className="w-full"
              src="https://www.babu88.app/static/image/referral/referralinnerbanner-desktop.jpg"
              alt=""
            />
            <img
              className="w-16 md:w-20 absolute -top-6 md:-top-8 -left-6 md:-left-8"
              src="https://www.babu88.app/static/image/referral/topLeft-coin.png"
              alt=""
            />
            <img
              className="w-12 md:w-14 absolute -top-5 right-8 md:-top-8 md:right-10"
              src="https://www.babu88.app/static/image/referral/topRight-coin.png"
              alt=""
            />
            <img
              className="w-9 md:w-11 absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4"
              src="https://www.babu88.app/static/image/referral/topRight-coin.png"
              alt=""
            />
          </div>
          <h2 className="text-base md:text-lg font-semibold">
            আপনার রেফারেল কোড পেতে লগইন করুন বা সদস্য হিসাবে নিবন্ধন করুন
          </h2>
          <div className="flex gap-5">
            <button className="p-2 px-5 text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300">
              আরও পড়ুন
            </button>
            <button className="p-2 px-5 text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-all duration-300">
              প্রবেশ করুন
            </button>
          </div>
        </div>
        <div className="p-5 md:p-10 bg-white border border-gray-400 rounded-3xl space-y-4">
          <div className="">
            <h2 className="text-base md:text-lg font-semibold">
              আজীবন রেফারেল কমিশন
            </h2>
            <p className="text-sm md:text-base text-blue-600">
              আপনার বন্ধুরা যখনই আমানত করে তখন আপনি তাদের কাছ থেকে 2% পর্যন্ত
              অতিরিক্ত আজীবন ডিপোজিট কমিশন অর্জন করতে পারবেন।
            </p>
          </div>
          <div className="ml-0 sm:ml-4 md:ml-10 pt-4 md:pt-8 space-y-4">
            <div className="flex gap-5">
              <div className="p-4 px-5 text-yellow-400 bg-slate-800  rounded-full">
                <img
                  src="https://www.babu88.app/static/svg/tier-icon.svg"
                  alt=""
                />
              </div>
              <div className="p-3 md:p-4 w-48 text-center text-sm font-semibold text-yellow-400 bg-slate-800 rounded-md transition-all duration-300">
                আপনি
              </div>
              <div className="p-3 md:p-4 w-32 text-center text-sm font-semibold text-yellow-400 bg-slate-800 rounded-md transition-all duration-300">
                মোট
              </div>
            </div>
            <div className="flex gap-5">
              <div className="p-4 px-5 text-black bg-slate-300  rounded-full">
                <img
                  src="https://www.babu88.app/static/svg/tier-icon-black.svg"
                  alt=""
                />
              </div>
              <div className="p-3 md:p-4 w-48 text-center  text-sm font-semibold text-black bg-slate-300   rounded-md transition-all duration-300">
                স্তর 1 (1%)
              </div>
              <div className="p-3 md:p-4 w-32 text-center text-sm font-semibold text-black bg-slate-300  rounded-md transition-all duration-300">
                0
              </div>
            </div>
            <div className="flex gap-5">
              <div className="p-4 px-5 text-black bg-slate-300  rounded-full">
                <img
                  src="https://www.babu88.app/static/svg/tier-icon-black.svg"
                  alt=""
                />
              </div>
              <div className="p-3 md:p-4 w-48 text-center  text-sm font-semibold text-black bg-slate-300   rounded-md transition-all duration-300">
                স্তর 2 (0.7%)
              </div>
              <div className="p-3 md:p-4 w-32 text-center text-sm font-semibold text-black bg-slate-300  rounded-md transition-all duration-300">
                0
              </div>
            </div>
            <div className="flex gap-5">
              <div className="p-4 px-5 text-black bg-slate-300  rounded-full">
                <img
                  src="https://www.babu88.app/static/svg/tier-icon-black.svg"
                  alt=""
                />
              </div>
              <div className="p-3 md:p-4 w-48 text-center text-sm font-semibold text-black bg-slate-300   rounded-md transition-all duration-300">
                স্তর 3 (0.3%)
              </div>
              <div className="p-3 md:p-4 w-32 text-center text-sm font-semibold text-black bg-slate-300  rounded-md transition-all duration-300">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
