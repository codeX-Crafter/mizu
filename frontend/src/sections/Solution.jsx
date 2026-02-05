import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Targeted Funding",
    desc: "Capital is routed directly to verified marine restoration projects run by certified partners.",
  },
  {
    title: "On-Ground Restoration",
    desc: "Coral reefs, mangroves, and seagrass beds are rebuilt using proven ecological techniques.",
  },
  {
    title: "AI-Based Monitoring",
    desc: "Satellite data and machine learning models track vegetation growth and reef recovery over time.",
  },
  {
    title: "Public Impact Records",
    desc: "All ecological changes are measured and displayed transparently for public verification.",
  },
];

const Solution = () => {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-roboto">
          From Funding to Verified Recovery
        </h2>

        <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
          A closed-loop system that connects financial support directly to
          measurable ecological outcomes using geospatial intelligence.
        </p>

        {/* Motion Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition bg-black/50 border border-white/10"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="p-6 text-left">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Step {idx + 1}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
