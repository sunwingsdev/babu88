import GameVendorList from "@/components/home/gameVendorList/GameVendorList";
import Banner from "../../../components/shared/banner/Banner";
import GameCard from "../../../components/shared/gameCard/GameCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const Casino = () => {
  const buttons = [
    {
      text: "সব",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/ld/evo.svg",
      text: "Evolution Gaming",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/ld/pp.svg",
      text: "Pragmatic Play",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/images/babu/provider/ld/sexy_v2.svg",
      text: "AE Casino",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/ld/royal.svg",
      text: "Royal",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/ld/ezugi.svg",
      text: "Ezugi",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/ld/pt.svg",
      text: "PlayTech",
    },
    {
      image: "https://jiliwin.9terawolf.com/images/babu/provider/ld/aura.svg",
      text: "Aura",
    },
  ];
  return (
    <div>
      <Banner
        B_image={
          "https://jiliwin.9terawolf.com/images/babu/game_banner/ld_new.jpg"
        }
        B_heading={"ক্যাসিনো"}
        B_semiText={
          "BABU88 এর সাথে লাইভ ডিলার এবং অন্যান্য আসল খেলোয়াড়দের সাথে খেলুন"
        }
        B_text={
          "ক্রেজি টাইম, অন্দর বাহার এবং লাইটনিং রুলেটের মতো সব বড় হিটগুলি উপভোগ করুন!"
        }
      />
      {/* mobile slide menu */}
      <RouteChange text={"ক্যাসিনো"} />
      <GameVendorList buttons={buttons} />
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <div className="mt-10 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
          <GameCard
            gameCardImg={"https://luckmedia.link/pltl_live_lobby/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Popular Lobby"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/ezg_popular_lobby/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Top Games Lobby"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_top_games_lobby/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Royal Gaming Live Lob"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/roy_royal_gaming_live_lobby/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Top games Lobby"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_dice_lobby/thumb.webp"}
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Dice Lobby"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_game_shows_lobby/thumb.webp"
            }
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Game Shows Lobby"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_monopoly_live/thumb.webp"}
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"MONOPOLY Live"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_mega_ball/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Mega Ball"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_first_person_lightning_roulette/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"First Person Lightni"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/sexy_v2/MX-LIVE-002_0.jpg"
            }
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Sexy Baccarat"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_super_sic_bo/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Super Sic Bo"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_crazy_time/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Crazy Time"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_lightning_ball/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Lightning Ball"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_lightning_storm/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Lightning Storm"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_first_person_hilo/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"First Person Hi Lo"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_salon_priv_blackjack_n/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Salon Privé Blackjack"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_salon_priv_blackjack_m/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Salon Privé Blackjack"}
            headingCenter={true}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_salon_priv_blackjack_l/thumb.webp"
            }
            gameHot={
              "https://www.babu88.app/static/svg/game-icon-new-mobile.svg"
            }
            gameHeading={"Salon Privé Blackjack L"}
            headingCenter={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Casino;
