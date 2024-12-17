import GameVendorList from "@/components/home/gameVendorList/GameVendorList";
import Banner from "@/components/shared/banner/Banner";
import GameCard from "@/components/shared/gameCard/GameCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const Fishing = () => {
  const buttons = [
    {
      text: "সব",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/fishing/jili.svg",
      text: "JILI",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/fishing/spg.svg",
      text: "SPG",
    },
  ];
  return (
    <div>
      <div>
        <Banner
          B_image={
            "https://jiliwin.9terawolf.com/images/babu/game_banner/fishing_new.jpg"
          }
          B_heading={"মাছ ধরা"}
          B_semiText={"BABU88 এর সাথে আপনার জয়ের জন্য রিল করুন"}
          B_text={"আপনার ভাগ্য চেষ্টা করুন এবং আজ জ্যাকপট ফিশিং গেম শুরু করুন!"}
        />
        {/* mobile slide menu */}
        <RouteChange text={"মাছ ধরা"} />
        <GameVendorList buttons={buttons} />
        <div className="container mx-auto px-4 sm:px-10 lg:px-24">
          <div className="mt-10 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/spg/F-SF01_0.jpg"
              }
              gameHeading={"Fishing God"}
              headingCenter={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fishing;
