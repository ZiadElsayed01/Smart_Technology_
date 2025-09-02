import DarkModeToggler from "../common/DarkModeToggler";
import logo from "../../assets/Logo.png";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";

const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About us", href: "#about" },
  { id: 3, name: "Our Services", href: "#services" },
  { id: 4, name: "Our Clients", href: "#clients" },
  { id: 5, name: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="flex fixed w-full items-center justify-between px-8 bg-[#01041ade] py-2 z-50">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="logo" className="w-12 h-12" />
          </a>
          <p className="text-white text-md md:w-[200px]">
            Smart Technology Company
          </p>
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white text-md hover:text-[#0c7dff] transition-all duration-300 ease-in-out"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <DarkModeToggler />
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMobile(!mobile)}
            className="text-white cursor-pointer"
          >
            {mobile ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {mobile && (
        <ul className="md:hidden flex flex-col gap-2 items-center bg-[#01041AB2] py-4 left-0 right-0 z-50 shadow-2xl fixed top-16">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white text-md hover:text-[#0c7dff] transition-all duration-300 ease-in-out"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li className="text-white">
            <DarkModeToggler />
          </li>
        </ul>
      )}
    </>
  );
}
