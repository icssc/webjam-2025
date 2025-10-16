"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { Event, Day, scheduleData } from "@/data/schedule";
import TicketField from "@/components/ui/ticket/ticket-field";
import BarcodeSection from "@/components/ui/ticket/barcode-section";
import PerforationMask from "@/components/ui/ticket/perforation-mask";

export default function Ticket({
  event,
  day,
  dayIndex,
  eventIndex,
}: {
  event: Event;
  day: Day;
  dayIndex: number;
  eventIndex: number;
}) {
  const rand = (seed: number, min: number, max: number) => {
    const x = Math.sin(seed * 9999) * 10000;
    return min + (x - Math.floor(x)) * (max - min);
  };

  const dayEventCount = scheduleData[dayIndex].events.length;
  const baseTilt = 3;
  const isEvenDay = dayIndex % 2 === 0;
  const direction = isEvenDay ? 1 : -1;

  let rotation = 0;
  if (dayEventCount === 2)
    rotation = direction * (eventIndex === 0 ? -baseTilt : baseTilt);
  else if (dayEventCount === 3)
    rotation =
      direction *
      (eventIndex === 0 ? -baseTilt : eventIndex === 1 ? 0 : baseTilt);
  else if (dayEventCount === 4)
    rotation =
      direction *
      (eventIndex === 0
        ? -baseTilt * 1.5
        : eventIndex === 1
        ? -baseTilt / 2
        : eventIndex === 2
        ? baseTilt / 2
        : baseTilt * 1.5);

  const xShift = rand(dayIndex * 100 + eventIndex, -25, 25);
  const yShift = eventIndex * 150 + rand(dayIndex * 300 + eventIndex, -20, 20);

  const ticketRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!ticketRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: width, h: height });
    });
    observer.observe(ticketRef.current);
    return () => observer.disconnect();
  }, []);

  const maskId = `ticketMask-${dayIndex}-${eventIndex}`;

  return (
    <div
      className={`
        w-full 
        transition-all duration-500 ease-out cursor-pointer
        block relative
        sm:absolute sm:left-1/2 sm:-translate-x-1/2
      `}
      style={{
        top: window.innerWidth >= 640 ? `${yShift}px` : "auto",
        transformOrigin: "center center",
        transform:
          window.innerWidth >= 640
            ? `rotate(${rotation}deg) translateX(${xShift}px)`
            : "none",
        zIndex: 10 + eventIndex,
        marginBottom: window.innerWidth < 640 ? "1rem" : "0",
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth >= 640) {
          e.currentTarget.style.transform = `rotate(0deg) translateY(-30px) scale(1.05)`;
          e.currentTarget.style.zIndex = "999";
        }
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth >= 640) {
          e.currentTarget.style.transform = `rotate(${rotation}deg) translateX(${xShift}px)`;
          e.currentTarget.style.zIndex = `${10 + eventIndex}`;
        }
      }}
    >
      <div className="relative sm:static">
        {size.w > 0 && size.h > 0 && (
          <PerforationMask id={maskId} width={size.w} height={size.h} />
        )}

        <div
          ref={ticketRef}
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border border-[#002457]/50 rounded-lg shadow-md overflow-hidden"
          style={{
            WebkitMask: `url(#${maskId})`,
            mask: `url(#${maskId})`,
          }}
        >
          <div className="flex flex-row min-h-[250px] w-full">
            <div className="w-12 sm:w-18 lg:w-28 bg-gradient-to-br from-amber-100 to-amber-200 border-b-3 sm:border-b-0 sm:border-r-3 border-dashed border-slate-600 flex items-center justify-center">
              <div className="-rotate-90 text-center  sm:py-0">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#002457] uppercase tracking-wider">
                  {day.name}
                </div>
                <div className="hidden lg:block text-xs sm:text-sm lg:text-sm font-bold text-[#002457]/70 uppercase mt-1">
                  {day.date}
                </div>
              </div>
            </div>

            <div className="flex-1 sm:p-4">
              <div className="border-0 sm:border-2 border-slate-600 rounded-lg p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl lg:text-3xl font-bold text-[#002457] mb-4 uppercase tracking-wide">
                    {event.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-y-2 mb-2 lg:mb-4">
                    <TicketField label="Time" value={event.time} />
                    <TicketField label="Location" value={event.location} />
                  </div>

                  <div className="border-t-2 border-dashed border-[#002457]/20 pt-1 lg:pt-3">
                    <p className="text-sm hidden lg:block text-[#002457]/50 font-bold uppercase mb-2">
                      Event Details
                    </p>
                    <p className="text-sm sm:text-base text-[#002457]/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <BarcodeSection seed={dayIndex * 10000 + eventIndex * 1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
