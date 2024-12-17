const Registration = () => {
  return (
    <div>
      <div className="bg-[#ebebeb]">
        <h2 className="text-2xl text-center font-semibold pt-10 text-[#333]">
          একাউন্ট তৈরি করুন
        </h2>
        <p className="px-2 text-sm text-center lg:text-base text-[#333]">
          আসুন আপনাকে No.1 ক্রিকেট এক্সচেঞ্জ এবং বেটিং প্ল্যাটফর্মে নিবন্ধন
          করিয়ে দিই
        </p>
        <div className="max-w-[500px] mx-auto py-6 pb-16">
          <img
            src={
              "https://www.babu88.app/static/image/banner/registerBanner/register_banner_bd.jpg"
            }
            alt=""
          />
          <form className="bg-[#ebebeb] sm:bg-white p-8 sm:p-10 md:px-20 md:py-10">
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
                placeholder="এখানে পাসওয়ার্ড পূরণ করুন"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="c_password"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                পাসওয়ার্ড নিশ্চিত করুন <span className="text-red-600">*</span>
              </label>
              <input
                type="c_password"
                id="c_password"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-[#FFCD03]"
                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="number"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                মোবাইল নম্বর
                <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="number"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-[#FFCD03]"
                placeholder="এখানে পূরণ করুন"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                ভেরিফিকেশন কোড
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-[#FFCD03]"
                placeholder=""
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                রেফারেল কোড
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-[#FFCD03]"
                placeholder=""
                required
              />
            </div>
            <button
              type="submit"
              className="text-base text-black bg-[#FFCD03] hover:bg-[#e5be22] transition-all duration-500 focus:outline-none font-medium rounded-lg w-full px-5 py-2.5 text-center"
            >
              নিবন্ধন
            </button>

            <div className="flex items-center mt-4">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-black dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                রেজিস্টার বোতামে ক্লিক করে, আমি এতদ্বারা স্বীকার করছি যে আমার
                বয়স 18 বছরের বেশি এবং আমি আপনার শর্তাবলী পড়েছি এবং মেনে
                নিয়েছি।
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
