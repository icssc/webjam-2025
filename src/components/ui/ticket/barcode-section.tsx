export default function BarcodeSection({ seed }: { seed: number }) {
  return (
    <div className="w-12 sm:w-16 md:w-38 flex items-center justify-center py-1 border-l-3 border-dashed border-slate-600">
      <div className="flex items-center justify-center h-full w-8">
        <div className="-rotate-90 whitespace-nowrap">
          <p className="text-base lg:text-lg text-[#002457] font-bold tracking-[0.2em]">
            {String(seed + 987654321012).padStart(14, "0")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[1px] h-full flex-1 items-center justify-center pr-10 py-2  hidden md:flex">
        {Array.from({ length: 36 }).map((_, i) => {
          const height = ((seed + i * 7919) % 8) + 3;
          return (
            <div key={i} className="bg-[#002457] w-full" style={{ height }} />
          );
        })}
      </div>
    </div>
  );
}
