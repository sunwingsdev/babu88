import GameVendorList from "@/components/home/gameVendorList/GameVendorList";
import Banner from "@/components/shared/banner/Banner";
import GameCard from "@/components/shared/gameCard/GameCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const TableGames = () => {
  const buttons = [
    {
      text: "সব",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/table/jili.svg",
      text: "JILI",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/table/sexy_v2.svg",
      text: "Ae King Maker",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/table/spg.svg",
      text: "Spade Gaming",
    },
  ];
  return (
    <div>
      <div>
        <Banner
          B_image={
            "https://jiliwin.9terawolf.com/images/babu/game_banner/table_new.jpg"
          }
          B_heading={"টেবিল গেম"}
          B_semiText={"ক্লাসিক ক্যাসিনো অভিজ্ঞতা আপনার জন্য BABU88 এনেছে"}
          B_text={
            "সিক বো, তিন পাটি, অন্দর বাহার, ড্রাগন এবং টাইগারের মতো ভক্তদের পছন্দ এখানে"
          }
        />
        {/* mobile slide menu */}
        <RouteChange text={"টেবিল গেম"} />
        <GameVendorList buttons={buttons} />
        <div className="container mx-auto px-4 sm:px-10 lg:px-24">
          <div className="mt-10 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/124_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"7up7down"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/125_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Sic Bo"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/sexy_v2/KM-TABLE-049_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"5CardPoker"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/159_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"TeenPatti Joker"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/127_0.jpg"
              }
              gameHot={
                "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
              }
              gameHeading={"Callbreak"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/122_0.jpg"
              }
              gameHot={
                "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
              }
              gameHeading={"iRich Bingo"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/94_0.jpg"
              }
              gameHot={
                "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
              }
              gameHeading={"Rummy"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/123_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Dragon & Tiger"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/79_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Andar Bahar"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/113_0.jpg"
              }
              gameHot={
                "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
              }
              gameHeading={"Poker King"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/75_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"AK47"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/112_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Journey West M"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/111_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Number King"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/66_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Lucky Number"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/63_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"7 UP-DOWN"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/62_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Dice"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/61_0.jpg"
              }
              gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
              gameHeading={"Dragon & Tiger"}
              headingCenter={true}
            />
            <GameCard
              gameCardImg={
                "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/64_0.jpg"
              }
              gameHot={
                "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
              }
              gameHeading={"Fairness Games"}
              headingCenter={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableGames;
