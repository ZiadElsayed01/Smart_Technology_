import Title from "../common/Title";
import Slider from "react-slick";
import ServicesFrame from "../Cards/ServicesFrame";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

function NextArrow(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-40 cursor-pointer bg-accent rounded-full text-accent-foreground"
    >
      <ChevronRight className="w-8 h-8" />
    </div>
  );
}

function PrevArrow(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-40 cursor-pointer bg-accent rounded-full text-accent-foreground"
    >
      <ChevronLeft className="w-8 h-8" />
    </div>
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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      className="p-16 py-28 bg-gradient-to-b from-background to-foreground relative text-accent"
      id="services"
    >
      <Title>Our Services</Title>
      <Slider {...settings}>
        {services.map((service) => (
          <ServicesFrame
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </Slider>
    </div>
  );
}
