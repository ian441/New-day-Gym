
import { motion } from "framer-motion";
import { Award, Target, Heart, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Goal-Oriented", desc: "Every program is designed with clear, measurable goals tailored to your body." },
  { icon: Zap, title: "High Intensity", desc: "Science-backed high-intensity methods that deliver results in less time." },
  { icon: Heart, title: "Holistic Health", desc: "Training that encompasses nutrition, recovery, and mental wellness." },
  { icon: Award, title: "Certified Expert", desc: "NASM, ACE, and CrossFit Level 3 certified with a decade of experience." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-3">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
              More Than Just <span className="text-gradient">Training</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 10 years in the fitness industry, We've helped hundreds of clients transform not just their bodies, but their entire approach to health and wellness. My philosophy combines cutting-edge exercise science with a deep understanding of human motivation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're a beginner taking your first steps or an athlete pushing for peak performance, I create personalized programs that challenge you while keeping training sustainable and enjoyable.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="glass rounded-sm px-5 py-4 sm:px-6 text-center min-w-[100px] flex-1 sm:flex-none">
                <p className="font-heading text-2xl font-bold text-primary">NASM</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Certified</p>
              </div>
              <div className="glass rounded-sm px-5 py-4 sm:px-6 text-center min-w-[100px] flex-1 sm:flex-none">
                <p className="font-heading text-2xl font-bold text-primary">ACE</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Certified</p>
              </div>
              <div className="glass rounded-sm px-5 py-4 sm:px-6 text-center min-w-[100px] flex-1 sm:flex-none">
                <p className="font-heading text-2xl font-bold text-primary">CF L3</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Certified</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <div key={v.title} className="glass rounded-sm p-5 sm:p-6 hover:border-primary/50 transition-colors group min-w-0">
                <v.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold uppercase mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
