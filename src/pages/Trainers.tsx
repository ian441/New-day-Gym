import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarCheck, Check, MessageCircle } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

const mission = {
  title: "Our Mission",
  body:
    "To provide a premium fitness experience that empowers individuals to achieve their health and wellness goals through innovative programs, expert guidance, and a supportive community environment.",
  highlights: [
    "State-of-the-art equipment and facilities",
    "Personalized training and nutrition plans",
    "Comprehensive wellness approach",
  ],
};

const trainers = [
  {
    id: "allan",
    name: "Coach Allan",
    specialties: ["Strength and Conditioning"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    whatsappHref: "https://wa.me/15551234001?text=Hi%20Coach%20Allan%2C%20I%27d%20like%20to%20book%20a%20session.",
  },
  {
    id: "calvin",
    name: "Coach Calvin",
    specialties: ["HIIT"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe43?w=600&q=80",
    whatsappHref: "https://wa.me/15551234002?text=Hi%20Coach%20Calvin%2C%20I%27d%20like%20to%20book%20a%20session.",
  },
  {
    id: "mike",
    name: "Coach Mike",
    specialties: ["Core Fit", "Flame (Weighted Cardio)"],
    image: "https://images.unsplash.com/photo-1597347345826-190a0420d965?w=600&q=80",
    whatsappHref: "https://wa.me/15551234003?text=Hi%20Coach%20Mike%2C%20I%27d%20like%20to%20book%20a%20session.",
  },
  {
    id: "sarah",
    name: "Coach Sarah",
    specialties: ["Yoga & Mobility", "Recovery & Stretch"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    whatsappHref: "https://wa.me/15551234004?text=Hi%20Coach%20Sarah%2C%20I%27d%20like%20to%20book%20a%20session.",
  },
];

const bookHref = "/#contact";

const Trainers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 gap-2 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors shrink-0 min-w-0"
          >
            <ArrowLeft className="w-5 h-5 shrink-0" />
            <span className="font-heading text-sm uppercase tracking-wider hidden sm:inline truncate">Back to Home</span>
          </Link>
          <span className="font-heading text-lg sm:text-xl font-bold text-primary uppercase tracking-wider truncate text-center">
            Trainers
          </span>
          <span className="w-9 shrink-0 sm:w-[120px]" aria-hidden />
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-3">Meet the team</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-wider px-2">
              Beast Mode <span className="text-primary">Trainers</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Expert coaches across strength, conditioning, HIIT, and recovery—here to guide every rep.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="glass rounded-lg p-6 sm:p-8 md:p-10 mb-14 border border-border/80"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider mb-5 text-center">
              {mission.title}
            </h2>
            <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-8">{mission.body}</p>
            <ul className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {mission.highlights.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 items-start text-sm text-foreground bg-card/50 border border-border rounded-sm p-4"
                >
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-snug">{line}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t, index) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06 }}
                className="glass rounded-lg overflow-hidden border border-border flex flex-col"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden shrink-0 bg-muted">
                  <OptimizedImage
                    src={t.image}
                    alt={t.name}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1 gap-4">
                  <div>
                    <h2 className="font-heading text-xl font-bold uppercase tracking-wide">{t.name}</h2>
                    <div className="mt-2 space-y-1">
                      {t.specialties.map((s) => (
                        <p key={s} className="text-sm text-muted-foreground">
                          {s}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto pt-2">
                    <a
                      href={bookHref}
                      className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-2.5 rounded-sm font-heading text-xs uppercase tracking-wider hover:opacity-90 transition-opacity glow-red"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Book
                    </a>
                    <a
                      href={t.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border border-border py-2.5 rounded-sm font-heading text-xs uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trainers;
