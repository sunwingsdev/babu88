import GameVendorList from "@/components/home/gameVendorList/GameVendorList";
import Banner from "@/components/shared/banner/Banner";
import GameCard from "@/components/shared/gameCard/GameCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const SportsBook = () => {
  const buttons = [
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/sb/ibc.svg",
      text: "SABA Sport",
    },
  ];
  return (
    <div>
      <div>
        <Banner
          B_image={
            "https://jiliwin.9terawolf.com/images/babu/game_banner/sb_new.jpg"
          }
          B_heading={"খেলার বই"}
          B_semiText={"BABU88-এর সাথে সেরা ক্রীড়া প্রতিকূলতা উপভোগ করুন"}
          B_text={
            "ক্রিকেট, ফুটবল এবং আরও অনেক কিছুর জন্য প্রিমিয়ার স্পোর্টস বেটিং প্ল্যাটফর্ম!"
          }
        />
        {/* mobile slide menu */}
        <RouteChange text={"খেলার বই"} />
        <GameVendorList buttons={buttons} />
        <div className="container mx-auto px-4 sm:px-10 lg:px-24">
          <div className="mt-10 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/ibc/0_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/svg/game-icon-new.svg"}
              gameHeading={"SABA Sports"}
              headingCenter={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsBook;
