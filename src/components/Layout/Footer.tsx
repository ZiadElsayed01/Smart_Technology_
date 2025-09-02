import logo from "../../assets/Logo.png";
import { Facebook, Phone } from "lucide-react";
import footer1 from "../../assets/Footer1.png";
import footer2 from "../../assets/Footer2.png";
import Flag from "../../assets/Egypt.png";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-b from-background to-foreground relative text-accent">
        <div className="grid grid-cols-1 md:grid-cols-3 p-12 md:py-28 gap-20 relative">
          <img src={footer1} alt="" className="absolute bottom-0 left-0" />
          <img src={footer2} alt="" className="absolute bottom-0 right-0" />

          <div className="flex flex-col items-center justify-center">
            <a href="/">
              <img src={logo} alt="Company Logo" className="w-24 h-24" />
            </a>
            <p className="text-accent text-xl my-4 text-center">
              Smart Programming Company Comprehensive solutions in interface and
              website development, artificial intelligence, and development of
              mobile applications!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="text-accent text-xl hover:text-[#0c7dff] transition-all duration-300 ease-in-out">
                Mobile Applications
              </li>
              <li className="text-accent text-xl hover:text-[#0c7dff] transition-all duration-300 ease-in-out">
                Website
              </li>
              <li className="text-accent text-xl hover:text-[#0c7dff] transition-all duration-300 ease-in-out">
                Artificial Intelligence
              </li>
              <li className="text-accent text-xl hover:text-[#0c7dff] transition-all duration-300 ease-in-out">
                Custom Development
              </li>
              <li className="text-accent text-xl hover:text-[#0c7dff] transition-all duration-300 ease-in-out">
                UI/UX Design
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Contact us</h2>
            <a
              target="_blank"
              href="tel:+201098785024"
              className="flex items-center gap-4 text-accent text-xl"
            >
              <Phone className="w-6 h-6 fill-[#0c7dff] text-[#0c7dff]" />
              <span>+201098785024</span>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61565171412630"
              className="flex items-center gap-4 text-accent text-xl my-4"
            >
              <Facebook className="w-6 h-6 fill-[#0c7dff] text-[#0c7dff]" />
              <span>Smart Company</span>
            </a>

            <div className="flex items-center gap-5 text-accent text-xl my-4">
              <img src={Flag} alt="Flag" width={20} height={20} />
              <p>Based in Egypt</p>
            </div>
          </div>
        </div>
        <div className="bg-background text-center p-4 text-accent">
          <p>
            © {new Date().getFullYear()} Smart Technology Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}
