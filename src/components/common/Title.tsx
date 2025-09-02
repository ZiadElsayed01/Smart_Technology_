export default function Title({ children }: { children: string }) {
  return (
    <div className="text-2xl md:text-4xl w-fit font-bold text-accent mb-10 border-b-4 border-[#0c68d2d0] pb-3">
      {children}
    </div>
  );
}
