import about from "../../assets/About.png";
import Title from "../common/Title";

export default function About() {
  return (
    <div
      className="p-12 md:p-42 bg-gradient-to-b from-background to-foreground relative"
      id="about"
    >
      <div className="absolute inset-0 z-0">
        <img src={about} alt="about" className="w-full h-full object-cover" />
      </div>
      <Title>About Us</Title>
      <p className="text-md md:text-2xl text-left text-accent md:w-[85%]">
        Founded in 2024,<br></br>we may be new—but we're driven, creative, and
        already making an impact. In just a short time, we've collaborated on
        multiple exciting projects and built strong partnerships.
      </p>
    </div>
  );
}
