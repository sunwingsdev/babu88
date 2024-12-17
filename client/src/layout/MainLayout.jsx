import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      <div className="flex sticky bottom-0 w-full md:hidden z-50">
        <Link to={"/registration"} className="w-1/2">
          <p className="p-3 text-base text-center font-semibold text-black bg-[#FFCD03] hover:bg-[#e5be22] transition-all duration-500">
            নিবন্ধন করুন
          </p>
        </Link>
        <Link to={"/login"} className="w-1/2">
          <p className="p-3 text-base text-center font-semibold text-white bg-[#0083FB] hover:bg-[#2f9bff] transition-all duration-500">
            প্রবেশ করুন
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MainLayout;
