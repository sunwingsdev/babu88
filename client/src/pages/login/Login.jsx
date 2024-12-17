import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-[#ebebeb]">
        <h2 className="text-2xl text-center font-semibold pt-10 text-[#333]">
          প্রবেশ করুন
        </h2>
        <p className="text-sm text-center lg:text-base text-[#333]">স্বাগতম!</p>
        <div className="max-w-[440px] mx-auto py-6 pb-16">
          <form className="bg-[#ebebeb] sm:bg-white p-8 sm:p-10">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                ব্যবহারকারীর নাম <span className="text-red-600">*</span>
              </label>
              <input
                type="name"
                id="name"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-[#FFCD03]"
                placeholder="এখানে পূরণ করুন"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                গোপন নম্বর <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-[#FFCD03]"
                placeholder="এখানে পূরণ করুন"
                required
              />
            </div>
            <button
              type="submit"
              className="text-base text-black bg-[#FFCD03] hover:bg-[#e5be22] transition-all duration-500 focus:outline-none font-medium rounded-lg w-full px-5 py-2.5 text-center"
            >
              প্রবেশ করুন
            </button>
            <Link>
              <p className="mt-6 text-sm text-center text-blue-500 underline">
                পাসওয়ার্ড ভুলে গেছেন
              </p>
            </Link>
            <p className="text-sm text-center text-[#333] pb-4">
              কোনো একাউন্ট এখনও নেই?{" "}
              <Link to={"/registration"} className="text-blue-500 underline">
                Register here
              </Link>
            </p>
            <p className="text-sm text-center border-t border-gray-400 py-4 text-[#333]">
              আপনি যদি লগ ইন করতে কোনো সমস্যার সম্মুখীন হন, দয়া করে LiveChat এর
              মাধ্যমে সহায়তার জন্য আমাদের গ্রাহক পরিষেবার সাথে যোগাযোগ করুন৷
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
