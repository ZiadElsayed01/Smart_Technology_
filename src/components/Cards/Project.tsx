export default function Project({
  title,
  description,
  img,
  link,
}: {
  title: string;
  description: string;
  img: string;
  link: string;
}) {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0c7dff] px-6">
          {title}
        </h1>
        <a
          href={link}
          className="flex items-center justify-between flex-col lg:flex-row mt-4 lg:mt-0 px-6 gap-6"
        >
          <p className="text-accent text-center md:text-left text-lg md:text-xl">
            {description}
          </p>
          <img src={img} alt={title} width={500} />
        </a>
      </div>
    </>
  );
}
