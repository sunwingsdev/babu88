import VideoSlider from "@/components/home/videoSlider/VideoSlider";
import BannerSlider from "../../../components/home/bannerSlider/BannerSlider";
import SecondaryBanner from "../../../components/home/secondaryBanner/SecondaryBanner";
import GameCard from "../../../components/shared/gameCard/GameCard";
import HomeMobileButton from "@/components/home/homeMobilButton/HomeMobileButton";

const Home = () => {
  const buttons = [
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/homepageHot.svg",

      title: "হট গেমস",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/cricket.svg",

      title: "ক্রিকেট",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/ld.svg",

      title: "ক্যাসিনো",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/rng.svg",

      title: "স্লট",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/table.svg",

      title: "টেবিল খেলা",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/sb.svg",

      title: "এসবি",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/fishing.svg",

      title: "মাছ ধরা",
    },
    {
      image: "https://www.babu88.app/static/svg/gameTabHolder/crash.svg",

      title: "ক্র্যাশ",
    },
  ];
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto mt-6 md:mt-0 px-4 sm:px-10 lg:px-24">
        <SecondaryBanner image="https://jiliwin.9terawolf.com/images/babu/banner/register_banner_home.jpg" />
        <div className="md:hidden py-2 flex gap-3 overflow-x-auto">
          {buttons.map((button) => (
            <HomeMobileButton
              key={button.image}
              image={button.image}
              title={button.title}
            />
          ))}
        </div>
        <h2 className="hidden md:block py-2 text-[27px] font-medium">
          হট গেমস
        </h2>
        <div className="mt-3 md:mt-0 pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
          <GameCard
            gameCardImg={
              "https://luckmedia.link/evo_lightning_storm/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Lightning Storm"}
            gameText={"EVOLUTION GAMING"}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/134_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Mega Ace"}
            gameText={"JILI"}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/pgs_wild_bounty_showdown/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Wild Bounty"}
            gameText={"PG SOFT"}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/hbn_laughing_buddha/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Laughing Buddha"}
            gameText={"HABANERO"}
          />
          <GameCard
            gameCardImg={
              "https://luckmedia.link/hbn_mystic_fortune_deluxe/thumb.webp"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Mystic Fortune Deluxe"}
            gameText={"HABANERO"}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/134_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Mega Ace"}
            gameText={"JILI"}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/669f794e9a160.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Money Coming Expand Bets"}
            gameText={"JILI"}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/images/babu/game_icons/en/jili/51_0.jpg"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Money Coming"}
            gameText={"JILI"}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/6683b58672ad5.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Super Ace Deluxe"}
            gameText={"JILI"}
          />
          <GameCard
            gameCardImg={
              "https://jiliwin.9terawolf.com/cms/h8/image/64a539ee6739e.png"
            }
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Fortune Gems 2"}
            gameText={"JILI"}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_crazy_time/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Crazy Time"}
            gameText={"EVOLUTION GAMING"}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/evo_funky_time/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Evo Funky Time"}
            gameText={"EVOLUTION GAMING"}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/spb_aviator/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"Aviator"}
            gameText={"SPRIBE"}
          />
          <GameCard
            gameCardImg={"https://luckmedia.link/avx_nft_aviatrix/thumb.webp"}
            gameHot={"https://www.babu88.app/static/image/other/hot-icon.png"}
            gameHeading={"NFT Aviatrix"}
            gameText={"AVIATRIX"}
          />
        </div>
        <div className="pb-4 md:pb-0">
          <VideoSlider />
        </div>
        <h2 className="block md:hidden pt-4 pb-1 text-base font-semibold text-gray-800">
          প্রচার
        </h2>
        <img
          className="md:hidden rounded-2xl"
          src="https://www.babu88.app/static/image/banner/referral/mobile_BDT_bd.jpg"
          alt=""
        />
        <div className="hidden py-0 md:py-4 lg:py-8 md:flex flex-col lg:flex-row gap-6">
          <div className="relative">
            <img
              className="h-52 object-fill rounded-2xl overflow-hidden"
              src="https://www.babu88.app/static/image/homepage/refer_banner.jpg"
              alt=""
            />
            <div className="text-white absolute top-0 p-4 space-y-3 max-w-96">
              <h2 className="text-xl font-semibold">
                Refer friends and start earning
              </h2>
              <p className="text-sm">
                The No.1 friend referral program in Bangladesh is here! Earn
                free ৳500 when your refer a friend and also earn lifetime
                commission of up to 2% for every deposit your friend makes!
              </p>
            </div>
            <button className="absolute bottom-6 left-10 px-4 py-1 text-lg font-bold text-black bg-yellow-400 hover:bg-yellow-600 rounded-full transition-all duration-500">
              Refer Now
            </button>
          </div>
          <img
            className="w-full lg:max-w-96 object-fill rounded-2xl overflow-hidden"
            src="https://www.babu88.app/static/image/homepage/bb88_bp_1400_560.jpg"
            alt=""
          />
        </div>
        <h2 className="block md:hidden pt-4 pb-1 text-base font-semibold text-gray-800">
          ডাউনলোড করুন
        </h2>
        <SecondaryBanner
          zipFile={"/babu88.apk"}
          image="https://www.babu88.app/static/image/banner/downloadClient/bdt/bd_bb88_downloadnow_appbanner_desktop.jpg"
          imageMobil="https://www.babu88.app/static/image/banner/downloadClient/bdt/bb88_downloadnow_appbanner_mobile.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
