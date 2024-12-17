import GameVendorList from "@/components/home/gameVendorList/GameVendorList";
import Banner from "@/components/shared/banner/Banner";
import GameCard from "@/components/shared/gameCard/GameCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const Cricket = () => {
  const buttons = [
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/cricket/betswiz.svg",
      text: "BetSwiz",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/cricket/sap.svg",
      text: "Dream Exchange",
    },
  ];
  return (
    <div>
      {/* banner img */}
      <Banner
        B_image={
          "https://jiliwin.9terawolf.com/images/babu/game_banner/cricket_new.jpg"
        }
        B_heading={"ক্রিকেট"}
        B_semiText={"BABU88 হল ক্রিকেট বেটিং এর জন্য এক নম্বর চয়েস"}
        B_text={
          "সমস্ত বড় ক্রিকেট লিগের জন্য সেরা প্রতিকূলতার সাথে লাইভ বেটিং!"
        }
      />
      {/* mobile slide menu */}
      <RouteChange text={"ক্রিকেট"} />
      <GameVendorList buttons={buttons} />
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <div className="mt-10 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
          <GameCard
            gameCardImg={
              "https://s3.ap-southeast-1.amazonaws.com/media-dev.ezgame4u.com/images/babu/game_icons/en/betswiz/betswiz.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Exchange"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/sap/sap_lobby_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/svg/game-icon-new.svg"}
            gameHeading={"Dream Exchange"}
            headingCenter={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Cricket;
