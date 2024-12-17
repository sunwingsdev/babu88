import RouteChange from "@/components/shared/routeChange/RouteChange";
import GameVendorList from "../../../components/home/gameVendorList/GameVendorList";
import Banner from "../../../components/shared/banner/Banner";
import GameCard from "../../../components/shared/gameCard/GameCard";

const Slot = () => {
  const buttons = [
    {
      text: "সব",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/jili.svg",
      text: "JILI",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/pp.svg",
      text: "Pragmatic Play",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/haba.svg",
      text: "Habanero",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/pg.svg",
      text: "PG Soft",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/spg.svg",
      text: "Spade Gaming",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/pt.svg",
      text: "PlayTech",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/rt.svg",
      text: "Red Tiger",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/png.svg",
      text: "Play N' Go",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/smart.svg",
      text: "SmartSoft",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/one.svg",
      text: "One Game",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/rng/netent.svg",
      text: "NetEnt",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/rng/nolimit.svg",
      text: "NoLimit",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/relax.svg",
      text: "Relax Gaming",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/rng/jdb.svg",
      text: "JDB",
    },
  ];
  return (
    <div className="">
      <Banner
        B_image={
          "https://jiliwin.9terawolf.com/images/babu/game_banner/rng_new.jpg"
        }
        B_heading={"স্লট গেম"}
        B_semiText={"BABU88 দিয়ে আজই স্পিন করুন এবং জিতে নিন"}
        B_text={"পুরস্কার বিজয়ী গেম প্রদানকারীদের থেকে সেরা স্লট গেম!"}
      />
      {/* mobile slide menu */}
      <RouteChange text={"স্লট"} />
      <GameVendorList buttons={buttons} />
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <div className="mt-4 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/6683b58672ad5.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Super Ace Deluxe"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/6683b58672ad5.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Super Ace"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/51_0.jpg"
            }
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Money Coming"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/sms_plinkox/thumb.webp"}
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"PlinkoX"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/646df1e242cad.png"
            }
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Golden Land"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/sms_multi_hot_5/thumb.webp"}
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Multi Hot 5"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/6304b2d3be3a3.jpeg"
            }
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Captain Golds Fortune"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/62de5e8ed509c.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Mayan Empire"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/6304b29a387f5.jpeg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Sugar Party"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/110_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Ali Baba"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/106_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"TWIN WINS"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/115_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Agent Ace"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/108_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Magic Lamp"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/76_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Party Night"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/92_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Crazy Hunter"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/109_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Fortune Gems"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/103_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Golden Empire"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/102_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"RomaX"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/100_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Super Rich"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/91_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Lucky Coming"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/85_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Pharaoh Treasure"}
            headingCenter={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Slot;
