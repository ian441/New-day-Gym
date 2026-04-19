import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

/** Replace with your gym WhatsApp (country code + number, no + or spaces). */
const WHATSAPP_NUMBER = "254700000000";

function whatsappUrl(message: string) {
  const n = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

const regularPlans = [
  {
    name: "Daily Pass",
    price: "KSh 500",
    badge: undefined as undefined | "popular",
    features: ["Full gym access", "All group classes", "Locker room access"],
  },
  {
    name: "Weekly Pass",
    price: "KSh 2,000",
    badge: "popular" as const,
    features: [
      "Full gym access",
      "All group classes",
      "Locker room access",
      "Fitness assessment",
    ],
  },
  {
    name: "Monthly Pass",
    price: "KSh 5,000",
    badge: undefined,
    features: [
      "Full gym access",
      "All group classes",
      "Locker room access",
      "Fitness assessment",
      "Personal trainer consultation",
    ],
  },
] as const;

const specialOffers = [
  {
    title: "Student Monthly",
    price: "KSh 4,000",
    save: undefined as string | undefined,
    badge: "students" as const,
  },
  {
    title: "Couples Monthly",
    price: "KSh 9,000",
    save: undefined,
    badge: "best-value" as const,
  },
  {
    title: "3 Months",
    price: "KSh 13,000",
    save: "Save KSh 2,000",
    badge: undefined,
  },
  {
    title: "6 Months",
    price: "KSh 27,000",
    save: "Save KSh 3,000",
    badge: undefined,
  },
  {
    title: "12 Months",
    price: "KSh 48,000",
    save: "Save KSh 12,000",
    badge: "best-value" as const,
  },
] as const;

const badgeLabel = {
  popular: "Most Popular",
  "best-value": "Best Value",
  students: "Students Only",
} as const;

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-3">Pricing</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            Membership <span className="text-gradient">Rates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan that fits your lifestyle and fitness goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-wide text-center md:text-left mb-8">
            Regular Memberships
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {regularPlans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-sm p-6 sm:p-8 flex flex-col relative ${
                p.badge === "popular"
                  ? "bg-primary/10 border-2 border-primary glow-red"
                  : "glass hover:border-primary/30 transition-colors border border-border/60"
              }`}
            >
              {p.badge === "popular" && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading uppercase tracking-wider px-4 py-1 whitespace-nowrap">
                  {badgeLabel.popular}
                </span>
              )}
              <h4 className="font-heading text-2xl font-bold uppercase mb-2">{p.name}</h4>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold">{p.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contact"
                  className={`flex-1 text-center py-3 font-heading uppercase tracking-wider text-sm transition-all ${
                    p.badge === "popular"
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Choose Plan
                </a>
                <a
                  href={whatsappUrl(`Hi, I'm interested in the ${p.name} (${p.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 font-heading uppercase tracking-wider text-sm border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-wide text-center md:text-left mb-8">
            Special Offers
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {specialOffers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-sm p-6 sm:p-8 flex flex-col relative ${
                o.badge === "best-value"
                  ? "bg-primary/10 border-2 border-primary glow-red"
                  : "glass hover:border-primary/30 transition-colors border border-border/60"
              }`}
            >
              {o.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-heading uppercase tracking-wider px-4 py-1 whitespace-nowrap ${
                    o.badge === "students"
                      ? "bg-secondary text-foreground border border-border"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {badgeLabel[o.badge]}
                </span>
              )}
              <h4 className="font-heading text-2xl font-bold uppercase mb-2 mt-1">{o.title}</h4>
              {o.save && <p className="text-primary text-sm font-medium mb-2">{o.save}</p>}
              <div className="mb-8 flex-1">
                <span className="font-heading text-4xl font-bold">{o.price}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contact"
                  className={`flex-1 text-center py-3 font-heading uppercase tracking-wider text-sm transition-all ${
                    o.badge === "best-value"
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Choose Offer
                </a>
                <a
                  href={whatsappUrl(`Hi, I'm interested in the ${o.title} offer (${o.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 font-heading uppercase tracking-wider text-sm border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm md:text-base max-w-3xl mx-auto glass rounded-sm border border-border/60 px-6 py-4"
        >
          Pay via I&M Bank – Lipa Na Paybill
        </motion.p>
      </div>
    </section>
  );
};

export default ProgramsSection;
