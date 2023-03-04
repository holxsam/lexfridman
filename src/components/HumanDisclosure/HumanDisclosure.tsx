export const HumanDisclosure = () => {
  return (
    <div className="relative flex flex-col gap-6 h-full w-full">
      <span className=" whitespace-nowrap text-[clamp(40px,5vw,60px)] [line-height:1]">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-red-500 animate-gradient-x">
          {"Conversations"}
        </span>
      </span>
      <span className="flex flex-col text-3xl text-zinc-500 font-bold">
        {
          "Conversations about the nature of intelligence, consciousness, love, and power."
        }
      </span>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
    </div>
  );
};
