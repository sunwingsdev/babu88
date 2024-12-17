import { Link } from "react-router-dom";

const BettingPass = () => {
  return (
    <div className="">
      <img
        className="md:hidden"
        src="https://www.babu88.app/static/image/mobileBanner/BB88_BP.jpg"
        alt=""
      />
      <div className="relative">
        <img
          className="w-full h-[450px] lg:h-[520px]"
          src="https://www.babu88.app/static/image/background/vip-background.jpeg"
          alt=""
        />
        <div className="absolute top-20 md:top-28 left-1/2 transform -translate-x-1/2 space-y-3 text-center  px-6 py-10 md:p-10 w-10/12 md:w-auto rounded-2xl text-white bg-blue-700">
          <h2 className="text-xl font-semibold">
            লগইন/রেজিস্টার করুন এখন BABU88 VIP হয়ে যান
          </h2>
          <p className="text-base font-semibold">
            প্রতি স্তরে বিনামূল্যে নগদ এবং একচেটিয়া পুরস্কার পান!
          </p>
          <ul className="flex items-center justify-center gap-4 pt-4">
            <Link to={"/login"}>
              <li className="text-sm font-semibold px-3 py-2 rounded-lg text-yellow-400 bg-black hover:bg-slate-900 transition-all duration-500">
                প্রবেশ করুন
              </li>
            </Link>
            <Link to={"/registration"}>
              <li className="text-sm font-semibold px-3 py-2 rounded-lg text-black bg-yellow-400 hover:bg-yellow-600 transition-all duration-500">
                নিবন্ধন করুন
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BettingPass;
