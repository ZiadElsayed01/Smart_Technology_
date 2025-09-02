import Footer from "./Footer";
import Navbar from "./Navbar";
import Details from "../Sections/Details";
import HWD from "../Sections/HWD";
import Hero from "../Sections/Hero";
import Services from "../Sections/Services";
import OurWork from "../Sections/OurWork";
import Testimonials from "../Sections/Testimonials";
import About from "../Sections/About";
import Contact from "../Sections/Contact";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Details />
      <HWD />
      <Services />
      <OurWork />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
