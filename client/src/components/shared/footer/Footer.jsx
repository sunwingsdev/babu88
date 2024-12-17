import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#ebebeb] md:bg-[#333] pt-8 md:pt-14">
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <div className="border-t border-teal-50 md:flex gap-4 pt-10 hidden">
          {/* left site */}
          <div className="text-white w-1/2">
            <div className="max-w-[320px] space-y-5">
              <h4 className="text-base font-semibold">
                BABU88 | দক্ষিণ এশিয়ায় বিশ্বস্ত অনলাইন ক্যাসিনো | বাংলাদেশ,
                ভারত, নেপালে শুধুমাত্র
              </h4>
              <p className="text-sm">
                BABU88 হল একটি অনলাইন ব্যাটিং কোম্পানি, যা বিস্তৃত পরিসরে বাজি
                এবং ক্যাসিনো বিকল্পগুলি অফার করে৷ 2021 সালে প্রতিষ্ঠিত, BABU88
                একটি ক্রিকেট এক্সচেঞ্জ প্ল্যাটফর্ম হিসাবে শুরু হয়েছিল যা দক্ষিণ
                এশিয়ার বাজারে পরিবেশন করে৷ আমাদের লক্ষ্য হল আমাদের
                ব্যবহারকারীদের কাছে অনলাইন ক্যাসিনো বাজি ধরার প্রথম পছন্দ হওয়া।
                গ্রাহক সেবা এবং বিনোদনের ক্ষেত্রে শুধুমাত্র সেরাটাই প্রত্যাশা
                করুন!
              </p>
            </div>
          </div>
          {/* right site */}
          <div className="w-1/2 text-white space-y-6">
            <p className="text-base">অফিসিয়াল পার্টনার এবং স্পনসর</p>
            <div className="flex gap-8">
              <div className="">
                <img
                  className="w-14"
                  src={
                    "https://www.babu88.app/static/image/footer/partner1.png"
                  }
                  alt=""
                />
                <p className="text-sm font-semibold max-w-8 mt-2">
                  Montreal Tigers
                </p>
              </div>
              <div className="">
                <img
                  className="w-14"
                  src={
                    "https://www.babu88.app/static/image/footer/partner2.png"
                  }
                  alt=""
                />
                <p className="text-sm font-semibold max-w-8 mt-2">
                  Colombo Strikers
                </p>
              </div>
              <div className="">
                <img
                  className="w-14"
                  src={
                    "https://www.babu88.app/static/image/footer/partner3.png"
                  }
                  alt=""
                />
                <p className="text-sm font-semibold max-w-8 mt-2">
                  Northern Warriors
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:py-10 flex gap-4 border-t md:border-none border-teal-50">
          {/* left site */}
          <div className="w-1/2 pt-6 md:pt-0">
            <p className="text-sm sm:text-base mb-4 text-black md:text-white">
              প্রত্যয়িত বই
            </p>
            <Link to={"/"} target="_blank">
              <img
                className="w-40 md:w-44 lg:w-52"
                src={
                  "https://www.babu88.app/static/image/footer/babu88-official.png"
                }
                alt=""
              />
            </Link>
          </div>
          {/* right site */}
          <div className="w-1/2 pt-6 md:pt-0">
            <p className="text-sm sm:text-base mb-4 text-black md:text-white">
              দায়িত্বশীল গেমিং
            </p>
            <div className="flex gap-4">
              <img
                className="w-8 sm:w-9 md:w-11"
                src={"https://www.babu88.app/static/svg/btm-18+.svg"}
                alt=""
              />
              <img
                className="w-8 sm:w-9 md:w-11"
                src={"https://www.babu88.app/static/svg/btm-gamcare.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-6 md:py-10 text-white flex gap-4 md:border-t border-teal-50">
          {/* left site */}
          <div className="w-1/2 hidden md:block">
            <p className="text-base mb-4">মূল্যপরিশোধ পদ্ধতি</p>
            <div className="flex gap-4">
              <Link>
                <img
                  className="w-14 filter grayscale hover:filter-none transition-all duration-500"
                  src={
                    "https://www.babu88.app/static/image/footer/icon_footer_bkash_colour.svg"
                  }
                  alt=""
                />
              </Link>
              <Link>
                <img
                  className="w-14 filter grayscale hover:filter-none transition-all duration-500"
                  src={
                    "https://www.babu88.app/static/image/footer/icon_footer_nagad_colour.svg"
                  }
                  alt=""
                />
              </Link>
              <Link>
                <img
                  className="w-10 filter grayscale hover:filter-none transition-all duration-500"
                  src={
                    "https://www.babu88.app/static/image/footer/icon_footer_rocket_colour.svg"
                  }
                  alt=""
                />
              </Link>
              <Link>
                <img
                  className="w-14 filter grayscale hover:filter-none transition-all duration-500"
                  src={
                    "https://www.babu88.app/static/image/footer/icon_footer_upay_colour.svg"
                  }
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/* right site */}
          <div className="w-full md:w-1/2">
            <p className="text-sm sm:text-base mb-2 md:mb-4 text-black md:text-white">
              আমাদের অনুসরণ করো
            </p>
            <div className="flex gap-4">
              <Link target="_blank">
                <img
                  className="w-8 sm:w-9 lg:w-11 filter grayscale hover:filter-none transition-all duration-500"
                  src={"https://www.babu88.app/static/svg/hover_btm-fb.svg"}
                  alt=""
                />
              </Link>
              <Link target="_blank">
                <img
                  className="w-8 sm:w-9 lg:w-11 transition-all duration-500"
                  src={"https://www.babu88.app/static/svg/btm-yt.svg"}
                  alt=""
                />
              </Link>
              <Link target="_blank">
                <img
                  className="w-8 sm:w-9 lg:w-11 filter grayscale hover:filter-none transition-all duration-500"
                  src={"https://www.babu88.app/static/svg/hover_btm-ig.svg"}
                  alt=""
                />
              </Link>
              <Link target="_blank">
                <img
                  className="w-8 sm:w-9 lg:w-11 transition-all duration-500"
                  src={"https://www.babu88.app/static/svg/btm-twitter.svg"}
                  alt=""
                />
              </Link>
              <Link target="_blank">
                <img
                  className="w-8 sm:w-9 lg:w-11 filter grayscale hover:filter-none transition-all duration-500"
                  src={"https://www.babu88.app/static/svg/hover_btm-tlg.svg"}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-sm sm:text-base md:mt-4 pb-8 text-black md:text-white">
          কপিরাইট © 2024 [ ব্র্যান্ড ]। সমস্ত অধিকার সংরক্ষিত
        </p>
      </div>
    </div>
  );
};

export default Footer;
