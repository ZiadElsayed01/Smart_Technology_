import sframe from "../../assets/SFrame.png";

export default function ServicesFrame({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img src={sframe} alt="" className="object-cover w-[350px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-accent text-lg">{title}</h2>
          <p className="text-accent text-center px-6 mt-6 text-md w-[80%] mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
