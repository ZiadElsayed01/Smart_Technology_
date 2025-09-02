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
        <h1 className="text-6xl font-bold text-[#0c7dff]">{title}</h1>
        <a
          href={link}
          className="flex items-center justify-between flex-col lg:flex-row mt-12 lg:mt-0 px-6 gap-6"
        >
          <p className="text-accent text-2xl">{description}</p>
          <img src={img} alt={title} width={500} />
        </a>
      </div>
    </>
  );
}
