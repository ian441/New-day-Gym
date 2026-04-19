import { motion } from "framer-motion";
import heroImg from "@/assets/handsome-black-man-is-engaged-gym.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          priority
          src={heroImg}
          alt="Focused athlete training in the gym"
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-24 sm:pt-20 pb-16 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-4">Personal Training & Coaching</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] sm:leading-[0.9] mb-6">
            Push Your <span className="text-gradient">Limits</span> Beyond
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg mb-8 font-light">
            Transform your body and mind with personalized training programs designed to unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/#programs"
              className="bg-primary text-primary-foreground px-8 py-4 font-heading uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-red text-center sm:inline-block"
            >
              View Programs
            </a>
            <a
              href="/#contact"
              className="border border-foreground/30 text-foreground px-8 py-4 font-heading uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors text-center sm:inline-block"
            >
              Book a Session
            </a>
          </div>

          <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "500+", label: "Clients Trained" },
              { num: "98%", label: "Success Rate" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.num}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
