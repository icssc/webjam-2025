"use client";

import { scheduleData, Event, Day } from "@/data/schedule";
import Ticket from "@/components/ui/ticket/ticket";

export default function Schedule() {
  return (
    <section className="pt-24 px-4 sm:px-12 md:px-24 max-w-7xl mx-auto">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-center mb-12">
        Schedule
      </h1>

      <div className="space-y-16">
        {scheduleData.map((day: Day, dayIndex: number) => (
          <div key={dayIndex}>
            <h2 className="text-4xl font-bold mb-4 sm:mb-10">
              {day.name}, {day.date}
            </h2>

            <div
              className="relative flex flex-col justify-center"
              style={{
                minHeight: `${day.events.length * 150 + 200}px`,
              }}
            >
              {day.events.map((event: Event, eventIndex: number) => (
                <Ticket
                  key={eventIndex}
                  event={event}
                  day={day}
                  dayIndex={dayIndex}
                  eventIndex={eventIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
