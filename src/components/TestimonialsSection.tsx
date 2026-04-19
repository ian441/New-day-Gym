
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    result: "Lost 30lbs in 4 months",
    text: "The personalized approach completely changed my relationship with fitness. I've never felt stronger or more confident.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    result: "Marathon ready in 6 months",
    text: "From barely running a mile to completing my first marathon. The structured program and constant support made all the difference.",
    rating: 5,
  },
  {
    name: "David Park",
    result: "Gained 15lbs muscle",
    text: "As a hard gainer, I'd tried everything. Finally found a coach who understood my body type and built a program that actually works.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Real <span className="text-gradient">Results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass rounded-sm p-6 sm:p-8 hover:border-primary/30 transition-colors min-w-0"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading text-lg font-semibold uppercase">{t.name}</p>
              <p className="text-primary text-sm font-medium">{t.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
