import React from "react";
import { motion } from "framer-motion";

import coralImg from "/assets/coral.png";
import mangroveImg from "/assets/mangrove.png";
import plasticImg from "/assets/plastic.png";

const problems = [
  {
    img: coralImg,
    title: "Coral Reefs Bleaching",
    desc: "Rising sea temperatures and pollution are killing coral reefs worldwide.",
  },
  {
    img: mangroveImg,
    title: "Mangroves Disappearing",
    desc: "Coastal forests vanish every year, leaving communities exposed to storms.",
  },
  {
    img: plasticImg,
    title: "Plastic Pollution",
    desc: "Millions of tons of plastic choke oceans, harming marine life daily.",
  },
];

const Problems = () => {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-roboto">
          Why the Ocean Needs Help
        </h2>

        <p className="text-lg text-white/70 mb-12">
          Billions are donated every year, but few projects show real, measurable impact.
        </p>

        {/* Motion Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {problems.map((p, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.img})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/70"></div>

              {/* Content */}
              <div className="relative py-8 px-6 flex flex-col h-full justify-end text-left text-white">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-white/80">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
