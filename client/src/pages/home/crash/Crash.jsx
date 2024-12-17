import GameVendorList from "@/components/home/gameVendorList/GameVendorList";
import Banner from "@/components/shared/banner/Banner";
import GameCard from "@/components/shared/gameCard/GameCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const Crash = () => {
  const buttons = [
    {
      text: "সব",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/crash/aviatrix.svg",
      text: "AVIATRIX",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/crash/jili.svg",
      text: "JILI",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/crash/pp.svg",
      text: "Pragmatic Play",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/crash/spribe.svg",
      text: "SPRIBE",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/crash/smart.svg",
      text: "SMARTSOFT",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/crash/bslt.svg",
      text: "BETSOLUTION",
    },
  ];
  return (
    <div>
      <div>
        <Banner
          B_image={
            "https://jiliwin.9terawolf.com/images/babu/game_banner/crash_new.jpg"
          }
          B_heading={"ক্র্যাশ"}
          B_semiText={
            "BABU88 আপনার জন্য সব সাম্প্রতিক এবং হটেস্ট ক্র্যাশ গেম নিয়ে এসেছে"
          }
          B_text={
            "অন্তহীন উত্তেজনার জন্য Aviator এবং Plinko এর মত ক্লাসিক উপভোগ করুন!"
          }
        />
        {/* mobile slide menu */}
        <RouteChange text={"ক্র্যাশ"} />
        <GameVendorList buttons={buttons} />
        <div className="container mx-auto px-4 sm:px-10 lg:px-24">
          <div className="mt-10 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/cms/h8/image/646c363d76997.png"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Go Rush"}
              headingCenter={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crash;
