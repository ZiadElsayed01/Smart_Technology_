import details from "../../assets/details.png";
import Ellipse3 from "../../assets/Ellipse3.png";

export default function Details() {
  return (
    <>
      <div className="flex items-center justify-between gap-12 flex-col lg:flex-row p-12 md:px-32 bg-gradient-to-r from-white dark:from-background to-foreground relative">
        <img src={details} alt="image" width={400} height={400} />
        <div>
          <img
            src={Ellipse3}
            alt="image"
            className="absolute top-0 right-0 h-full"
          />
          <div className="w-full lg:w-2/3 text-center mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-accent mb-12">
              Outdated technology is holding businesses back.
            </h2>
            <p className="text-center text-accent text-lg">
              We deliver fast, secure, and scalable software solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
