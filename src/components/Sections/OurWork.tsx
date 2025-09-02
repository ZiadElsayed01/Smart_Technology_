import Slider from "react-slick";
import Project from "../Cards/Project";
import Title from "../common/Title";
import Wellbing from "../../assets/Wellbing.png";
import GoCar from "../../assets/GoCar.png";
import CRM from "../../assets/CRM.png";
import Scooter from "../../assets/Scooter.png";

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

const projects = [
  {
    id: 1,
    title: "Wellbing day",
    description:
      "Are you a doctor looking for a way to effectively manage your clinic? With the Smart healthcare app, you canEasily organize patient dataSmartly schedule and manage appointmentsTrack medical records with a single touch",
    img: Wellbing,
    link: "https://www.facebook.com/photo/?fbid=122153580494505713&set=ecnf.61565171412630",
  },
  {
    id: 2,
    title: "Go Car",
    description:
      "With one year of technical support You can also pay in installments at your convenience With customer service that responds to you and explains everything you need.",
    img: GoCar,
    link: "https://www.facebook.com/photo/?fbid=122174814800505713&set=ecnf.61565171412630",
  },
  {
    id: 3,
    title: "CRM dashboard Customers list",
    description:
      "Follow your clients professionally Organize the sales and marketing team easily Increase customer satisfaction and loyalty Make decisions based on accurate data and smart reports",
    img: CRM,
    link: "https://www.facebook.com/photo/?fbid=122170494704505713&set=ecnf.61565171412630",
  },
  {
    id: 4,
    title: "Scooter",
    description:
      "The first smart app for booking scooters in Egypt The app will be easy to use, fast, and secure you will be able to book, pay, and move in minutes!",
    img: Scooter,
    link: "https://www.facebook.com/photo/?fbid=122165030330505713&set=ecnf.61565171412630",
  },
];

export default function OurWork() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };
  return (
    <>
      <div className="p-6 md:p-28 bg-gradient-to-b from-background to-foreground relative">
        <Title>Our Work</Title>
        <p className="text-accent text-xl text-center md:px-12">
          Review our creativity in previous projects. Our business exhibition
          reflects successful examples of cooperation with diverse clients from
          various sectors. Let our work talk about us
        </p>
      </div>
      <div className="p-6 md:p-28 bg-gradient-to-b from-background to-foreground relative">
        <Slider {...settings}>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}
