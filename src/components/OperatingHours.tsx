import { motion } from "framer-motion";

const scheduleRows = [
  { day: "MON", morning: "Circuit", evening: "Zumba" },
  { day: "TUE", morning: "Spin", evening: "HIIT" },
  { day: "WED", morning: "Circuit", evening: "Katabox/Aerobics" },
  { day: "THU", morning: "Corefit", evening: "Crossfit" },
  { day: "FRI", morning: "HIIT", evening: "Spin" },
] as const;

const hoursBlocks = [
  {
    emoji: "🏃‍♂️",
    title: "Monday – Friday",
    hours: "5:00 AM – 9:00 PM",
    detail: "Peak hours: 6:00 AM – 8:00 AM & 6:00 PM – 8:00 PM",
  },
  {
    emoji: "💪",
    title: "Saturday",
    hours: "7:00 AM – 5:00 PM",
    detail: "Weekend warrior sessions available",
  },
  {
    emoji: "🧘‍♀️",
    title: "Sunday & Holidays",
    hours: "8:00 AM – 4:00 PM",
    detail: "Relaxed schedule for recovery workouts",
  },
] as const;

const OperatingHours = () => {
  return (
    <section id="hours" className="section-padding bg-secondary/30 border-y border-border">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center md:mb-14"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Hours & classes</p>
          <h2 className="mb-3 font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Operating Hours
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            We&apos;re here when you need us — flexible hours to fit your busy lifestyle
          </p>
        </motion.header>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {hoursBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex flex-col border border-border bg-card px-6 py-6 md:px-7 md:py-7"
            >
              <h3 className="mb-3 font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
                <span className="mr-2" aria-hidden>
                  {block.emoji}
                </span>
                {block.title}
              </h3>
              <p className="mb-2 text-lg font-medium tabular-nums text-foreground">{block.hours}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{block.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-border bg-card"
        >
          <div className="border-b border-border px-6 py-8 md:px-8 md:py-9">
            <h3 className="mb-6 font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
              Gym Class Schedule
            </h3>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Morning session
                </dt>
                <dd className="tabular-nums text-foreground">6:30 AM – 7:30 AM</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Evening classes
                </dt>
                <dd className="tabular-nums text-foreground">6:30 PM – 7:30 PM</dd>
              </div>
            </dl>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-8">
                    Day
                  </th>
                  <th className="px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-8">
                    Morning session
                  </th>
                  <th className="px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-8">
                    Evening classes
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr key={row.day} className="border-b border-border last:border-b-0">
                    <td className="px-6 py-3.5 font-medium tabular-nums text-primary md:px-8">{row.day}</td>
                    <td className="px-6 py-3.5 text-foreground md:px-8">{row.morning}</td>
                    <td className="px-6 py-3.5 text-foreground md:px-8">{row.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground md:px-8">
            * Schedule may vary. Contact us for the most current timetable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OperatingHours;
