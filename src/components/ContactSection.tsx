
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-3">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold uppercase mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              Ready to start your transformation? Reach out and let's discuss how we can achieve your fitness goals together.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "coach@beastmode.com" },
                { icon: Phone, label: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Downtown Fitness District, NY" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-sm flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {[Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass rounded-sm flex items-center justify-center hover:border-primary/50 transition-colors">
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-sm p-6 sm:p-8 space-y-5 min-w-0"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Tell me about your fitness goals..."
                rows={4}
                required
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 font-heading uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-red flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent!" : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
