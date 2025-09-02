export default function ClientCard({
  feedback,
}: {
  feedback: {
    id: number;
    name: string;
    desc: string;
    img: string;
  };
}) {
  return (
    <div>
      <div className="flex items-center justify-center gap-6 mb-12">
        <img src={feedback.img} alt={feedback.name} />
        <h2 className="text-3xl text-[#0c7dff]">{feedback.name}</h2>
      </div>
      <p className="text-center text-lg md:text-3xl lg:w-[50%] lg:mx-auto px-8">
        {feedback.desc}
      </p>
    </div>
  );
}
