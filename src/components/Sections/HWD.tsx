import HWDFrame from "../Cards/HWDFrame";
import Title from "../common/Title";

const hwd = [
  {
    id: 1,
    title: "Plan",
    description: "Identify needs and define goals.",
  },
  {
    id: 2,
    title: "Design",
    description: "Craft user experience and interfaces.",
  },
  {
    id: 3,
    title: "Develop",
    description: "Build, test, and optimize.",
  },
  {
    id: 4,
    title: "Launch",
    description: "Deliver with quality assurance.",
  },
];

export default function HWD() {
  return (
    <div className="p-16 bg-gradient-to-b from-background to-foreground relative">
      <Title>How We Develop ?</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-12">
        {hwd.map((item) => (
          <HWDFrame
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
