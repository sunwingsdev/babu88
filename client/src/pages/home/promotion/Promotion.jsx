import Button from "@/components/shared/button/Button";
import OfferCard from "@/components/shared/offerCard/OfferCard";
import RouteChange from "@/components/shared/routeChange/RouteChange";

const Promotion = () => {
  const buttons = [
    {
      textName: "সব",
    },
    {
      textName: "খেলাধুলা",
    },
    {
      textName: "লাইভ ক্যাসিনো",
    },
    {
      textName: "স্লট",
    },
    {
      textName: "টেবিল গেম",
    },
    {
      textName: "VIP",
    },
    {
      textName: "ক্র্যাশ",
    },
    {
      textName: "টুর্নামেন্ট",
    },
  ];
  const offers = [
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-669f55be84459.jpg",
      heading: "ইনস্ট্যান্ট 3.00% ডিপোজিট বোনাস",
      text: "বিকাশ, নগদ, রকেট বা UPAY ব্যবহার করে প্রতিবার জমা করার সময় অতিরিক্ত 3.00% স্বয়ংক্রিয়ভাবে যোগ করুন",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-669f566dbd6c2.jpg",
      heading: "8.88% বিশেষ সাপ্তাহিক ক্যাশব্যাক",
      text: "আমাদের সাপ্তাহিক ৳18,888 পর্যন্ত ক্যাশব্যাকের মাধ্যমে উত্তেজনাকে বাঁচিয়ে রাখুন",
      button: "দাবি করুন",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-66eb8fb2d7613.jpg",
      heading: "লাকি ড্র বিজয়ীর ঘোষণা",
      text: "আমরা আমাদের প্রথম রিওয়ার্ড স্টোর লাকি ড্র ইভেন্টের বিজয়ীদের ঘোষণা করতে পেরে রোমাঞ্চিত!",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-66f1021a9c2a2.jpg",
      heading: "BABU88 NO.1 VIP প্রিমিয়াম সদস্য",
      text: "আপনার খেলা উন্নত করুন - একজন ভিআইপি হয়ে উঠুন এবং একচেটিয়া সুবিধা উপভোগ করুন!",
      button: "দাবি করুন",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-66c2ec234e8e1.jpg",
      heading: "BABU88 Reward Store এখানে!",
      text: "এখনই পুরস্কারের কয়েন দিয়ে কেনাকাটা করুন এবং নতুন আইফোন, বিনামূল্যে ক্রেডিটসহ আরও অনেক কিছু পান!",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-6695e642489af.jpg",
      heading: "BABU88 বেটিং পাস",
      text: "রোমাঞ্চকর পুরষ্কার পান এবং প্রতিবার যখন আপনি একটি নতুন স্তর জয় করেন তখন বিনামূল্যে নগদ পান!",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-669f56e11fef1.jpg",
      heading: "BABU88 রেফার করুন এবং চিরকাল উপার্জন করুন",
      text: "আমন্ত্রণ করুন এবং উপার্জন করুন! প্রতিবার আপনার বন্ধুরা ডিপোজিট করলে, আপনি ৳500...",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-6696237cb4ad0.jpg",
      heading: "BABU88 এজেন্ট অ্যাফিলিয়েট প্রোগ্রামে",
      text: "No. 1 বেটিং প্ল্যাটফর্মের সাথে একজন এজেন্ট হন এবং আজই উপার্জন শুরু করুন!",
    },
    {
      image:
        "https://jiliwin.9terawolf.com/cms/undefined/image/bd-mobile-66b2fbaf81579.jpg",
      heading: "50% লাইভ ক্যাসিনো প্রথম আমানত বোনাস",
      text: "50% বোনাস সহ 13,000 টাকা পর্যন্ত বোনাস সহ লাইভ ক্যাসিনো গেমগুলিতে ডিপোজিট করুন এবং বাজি ধরুন!",
      button: "দাবি করুন",
    },
  ];
  return (
    <div>
      {/* mobile slide menu */}
      <RouteChange text={"প্রমোশন"} />
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <div className="flex gap-1 xl:gap-2 mt-2 md:mt-6 p-2 bg-slate-100 lg:overflow-hidden overflow-x-auto">
          {buttons.map((button) => (
            <Button key={button.textName} nameText={button.textName} />
          ))}
        </div>
        <div className="py-2 md:py-10 grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {offers.map((offer) => (
            <OfferCard
              key={offer.image}
              cardImage={offer.image}
              cardHeading={offer.heading}
              cardText={offer.text}
              cardButton={offer.button}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
