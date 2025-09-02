import { useEffect, useState } from "react";
import Title from "../common/Title";
import Slider from "react-slick";
import ServicesFrame from "../Cards/ServicesFrame";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

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

const services = [
  {
    id: 1,
    title: "Custom Development",
    description:
      "Custom software solutions that meet your specific business needs",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    description:
      "Innovative smart solutions using machine learning and artificial intelligence technologies",
  },
  {
    id: 3,
    title: "Mobile Applications",
    description:
      "Developing smart and fast applications for iOS and Android using the latest technologies",
  },
  {
    id: 4,
    title: "Websites",
    description:
      "Designing and developing responsive and fast websites using the latest frameworks",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Modern designs and exceptional user experience for all platforms",
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1280) setSlides(3);
      else if (w >= 1024) setSlides(2);
      else setSlides(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  if (!mounted) return null;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides > 1 ? 1 : 1,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  } as const;

  return (
    <div
      className="p-6 md:p-28 bg-gradient-to-b from-background to-foreground relative text-accent"
      id="services"
    >
      <Title>Our Services</Title>

      <div className="relative">
        <Slider key={slides} {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-3 !w-full">
              <ServicesFrame
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
