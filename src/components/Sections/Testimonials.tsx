import lebanon from "../../assets/lebanon.png";
import saudi from "../../assets/saudi.png";
import eraq from "../../assets/eraq.png";
import jordan from "../../assets/jordan.png";
import Egypt from "../../assets/Egypt.png";
import testFooter from "../../assets/testFooter.png";
import Title from "../common/Title";
import Slider from "react-slick";
import ClientCard from "../Cards/ClientCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Feedback {
  id: number;
  name: string;
  desc: string;
  img: string;
}

function NextArrow(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-40 cursor-pointer bg-accent rounded-full text-accent-foreground p-2 shadow-md"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
}

function PrevArrow(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-40 cursor-pointer bg-accent rounded-full text-accent-foreground p-2 shadow-md"
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
}

const feedbacks: Feedback[] = [
  {
    id: 1,
    name: "عميل لبناني",
    desc: "بدي قول عنجد شكرا من القلب على تعبك ومجهودك بهالتطبيق. شغلك واضح فيه احترافية واحترام، وبيبيّنّ قديش بتاخد شغلك على محمل الجد. كل الاحترام إلك، وإن شاء الله دايما من نجاح",
    img: lebanon,
  },
  {
    id: 2,
    name: "عميل سعودي",
    desc: "صراحة كل الشكر والتقدير لك على مجهودك الكبير وتعاونك الراقي.تعامل احترافي وأخلاق عالية نفتخر فيها، وشغلك فعلا ينعكس عليه اهتمامك بالتفاصيل وحرصك على الجودة. الاحترام  لك، ومن نجاح لنجاح بإذن الله",
    img: saudi,
  },
  {
    id: 3,
    name: "عميل عراقي",
    desc: "ألف شكر وتقدير لحضرتك على كل  الجهد والتعاون. شغلك يشرح الصدر وتعامل راق يدل على أخلاقك العالية واحترافيتك. كل الاحترام  إلك، وإن شاء الله نشوفك دايما في أعلى  المراتب",
    img: eraq,
  },
  {
    id: 4,
    name: "عميل اردني",
    desc: "عن جد شكرا من القلب على تعاملك الراقي، و شغلك المحترف. واضح إنك شخص بتشتغل بكل ضمير ، و بتحط كل جهدك لكون النتائج ممتازة. فخورين إننا اشتغلنا معك ، وإن شاء الله دايما للأفضل",
    img: jordan,
  },
];

const flags = [
  {
    id: 1,
    flagURL: jordan,
  },
  {
    id: 2,
    flagURL: lebanon,
  },
  {
    id: 3,
    flagURL: Egypt,
  },
  {
    id: 4,
    flagURL: eraq,
  },
  {
    id: 5,
    flagURL: saudi,
  },
  {
    id: 6,
    flagURL: Egypt,
  },
];

export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  const flagSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
      <div
        className="p-6 md:p-28 bg-gradient-to-b from-background to-foreground relative text-accent"
        id="clients"
      >
        <Title>Testimonials</Title>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <Slider {...settings}>
              {feedbacks.map((feedback) => (
                <ClientCard key={feedback.id} feedback={feedback} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="mt-16">
          <img src={testFooter} alt="image" className="mx-auto" width={600} />
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-background to-foreground relative text-accent text-center w-full overflow-hidden">
        <h2 className="text-xl md:text-3xl mb-12">
          Our Clients Around the Arab World
        </h2>
        <Slider {...flagSettings}>
          {flags.map((flag) => (
            <div key={flag.id} className="flex items-center justify-center">
              <img src={flag.flagURL} width={220} height={120} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
