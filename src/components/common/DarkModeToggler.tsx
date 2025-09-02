import { useTheme } from "../../context/ThemeContext";
import Moon from "../../assets/Moon.png";
import Sun from "../../assets/Sun.png";

export default function DarkModeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div onClick={() => toggleTheme()} className="cursor-pointer">
        {theme === "light" ? (
          <img src={Sun} alt="Sun" className="w-10 h-10" />
        ) : (
          <img src={Moon} alt="Moon" className="w-10 h-10" />
        )}
      </div>
    </>
  );
}
