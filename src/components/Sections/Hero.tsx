import ellipsis from "../../assets/Ellipse.png";

export default function Hero() {
  return (
    <>
      <div className="Hero z-10 h-[100vh] overflow-hidden" id="home">
        <div className="">
          <img src={ellipsis} alt="ellipsis" />
        </div>
        <div className="absolute h-full inset-0 bg-[#0f022a]/60 flex items-left justify-center flex-col gap-8 z-40">
          <div className="px-6 md:px-16 md:w-[800px]">
            <h1 className="text-xl md:text-5xl text-center md:text-left font-bold text-white">
              Set Off Towards Excellence
            </h1>
            <p className="text-md md:text-2xl text-white my-12 md:w-[75%] mx-auto text-center">
              Innovative Software Solutions to Drive Your Business Forward
            </p>
            <a
              className="bg-white block w-fit mx-auto text-[#0c7dff] py-4 px-12 rounded-md border-2 border-[#0c7dff]"
              href="#about"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
