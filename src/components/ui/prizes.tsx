import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PRIZES } from "@/data/prizes";

export function Prizes() {
  return (
    <div className="flex flex-col items-center justify-center my-24 mb-48 relative">
      <div className="z-10 w-[80%] space-y-8">
        <div className="flex text-7xl font-semibold">Prizes</div>
        <span className="block text-2xl">
          Some of the featured prizes for outstanding projects!
        </span>

        <div className="flex flex-row flex-wrap justify-center gap-6">
          {PRIZES.map((prize) => (
            <Card
              className="gap-3 p-3 w-fit border-2 border-amber-400/60 bg-gradient-to-br from-indigo-950 to-slate-900 pointer-events-none shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-300 relative overflow-visible"
              key={prize.label}
            >
              <div
                className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-40 animate-pulse"
                style={{ animationDuration: "2s" }}
              />

              <CardContent className="px-0 relative z-10">
                <div className="bg-white/95 p-2 rounded-lg">
                  <Image
                    src={prize.img}
                    alt={prize.label}
                    width={250}
                    height={250}
                    className="h-[250px] rounded-lg object-contain"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-center relative z-10">
                <p className="text-lg font-bold text-amber-100 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                  {prize.label}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prizes;
