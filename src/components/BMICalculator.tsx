
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return { label: "Underweight", color: "text-yellow-400" };
    if (val < 25) return { label: "Normal", color: "text-green-400" };
    if (val < 30) return { label: "Overweight", color: "text-orange-400" };
    return { label: "Obese", color: "text-primary" };
  };

  return (
    <section id="bmi" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
            BMI <span className="text-primary">Calculator</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Check your Body Mass Index to understand where you stand and plan your fitness journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto glass rounded-lg p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="font-heading text-lg uppercase tracking-wider">Calculate Your BMI</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 75"
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              onClick={calculate}
              className="w-full bg-primary text-primary-foreground py-3 rounded-sm font-heading uppercase tracking-wider hover:opacity-90 transition-opacity glow-red"
            >
              Calculate
            </button>
          </div>

          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center p-4 bg-background/50 rounded-sm"
            >
              <p className="text-muted-foreground text-sm">Your BMI</p>
              <p className="text-5xl font-heading font-bold mt-1">{bmi}</p>
              <p className={`text-lg font-semibold mt-1 ${getCategory(bmi).color}`}>
                {getCategory(bmi).label}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator;
