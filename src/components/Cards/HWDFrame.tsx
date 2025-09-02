import frame from "../../assets/Frame.png";

export default function HWDFrame({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="relative">
        <img
          src={frame}
          alt=""
          className="w-[200px] h-[200px] object-cover relative mx-auto"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent text-3xl">
          {title}
        </h2>
      </div>
      <p className="text-accent text-center mt-8 text-xl w-[80%] mx-auto">
        {description}
      </p>
    </div>
  );
}
