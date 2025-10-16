"use client";

import { motion } from "framer-motion";
import { scheduleData, Event, Day } from "@/data/schedule";
import Ticket from "@/components/ui/ticket/ticket";

export default function Schedule() {
  return (
    <section className="pt-24 px-4 sm:px-12 md:px-24 max-w-7xl mx-auto">
      <motion.h1
        className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Schedule
      </motion.h1>

      <div className="space-y-16">
        {scheduleData.map((day: Day, dayIndex: number) => (
          <motion.div
            key={dayIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
