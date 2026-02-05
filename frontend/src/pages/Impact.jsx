// src/pages/Impact.jsx
import React from "react";
import CountUp from "react-countup";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const Impact = () => {
  const stats = [
    { label: "CO₂ Sequestered", value: 12450, bgImg: "/assets/co2.png" },
    { label: "Species Protected", value: 1230, bgImg: "/assets/species.png" },
    { label: "Communities Helped", value: 45, bgImg: "/assets/communities.png" },
    { label: "Projects Completed", value: 12, bgImg: "/assets/projects.png" },
  ];

  const co2Data = {
    labels: ["Sequestered", "Remaining Target"],
    datasets: [{ data: [12450, 5000], backgroundColor: ["#22d3ee", "#1e293b"] }],
  };
  const speciesData = {
    labels: ["Protected", "Endangered"],
    datasets: [{ data: [1230, 300], backgroundColor: ["#4ade80", "#1e293b"] }],
  };
  const communityData = {
    labels: ["Villages Helped", "Remaining"],
    datasets: [{ data: [45, 20], backgroundColor: ["#facc15", "#1e293b"] }],
  };

  const highlights = [
    { zone: "Kerala Mangroves", risk: "High", priority: 95, metric: "CO₂ 4500 tons", bgImg: "/assets/kerala.jpg" },
    { zone: "Sundarbans", risk: "Medium", priority: 80, metric: "Species 120+", bgImg: "/assets/sundarbans.jpg" },
    { zone: "Goa Coastal", risk: "Low", priority: 60, metric: "Communities 15", bgImg: "/assets/goa.jpg" },
  ];

  const extraData = [
    { label: "Zones Covered", value: 8 },
    { label: "Endangered Species Saved", value: 300 },
    { label: "Community Workshops", value: 25 },
    { label: "CO₂ Offset Potential (tons)", value: 5000 },
  ];

  const testimonials = [
    {
      name: "Priya, Researcher",
      text: "The mangrove projects revived biodiversity massively! We are seeing a clear increase in species diversity and healthier ecosystems across multiple zones.",
    },
    {
      name: "Arun, Fisherman",
      text: "Our village is safer, livelihoods restored, and life changed. The interventions in coastal management and community engagement made a tangible difference in daily life.",
    },
    {
      name: "Ananya, NGO Volunteer",
      text: "CO₂ reduction targets exceeded thanks to these interventions! It’s inspiring to see measurable environmental impact and community benefit hand-in-hand.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-10 space-y-12 selection:bg-cyan-500/30">
      <h1 className="font-roboto pt-16 text-3xl md:text-4xl font-bold text-center text-cyan-400">
        Real Impact, Measurable Results
      </h1>

      {/* Top Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-slate-800/70 rounded-xl p-6 shadow-lg flex flex-col items-center overflow-hidden border border-slate-700"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${s.bgImg})` }}
            ></div>
            <h3 className="text-lg font-semibold mb-2 relative z-10">{s.label}</h3>
            <p className="text-3xl font-bold text-cyan-400 relative z-10">
              <CountUp end={s.value} duration={2} separator="," />
            </p>
          </motion.div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[{ title: "CO₂ Sequestered", data: co2Data, value: "12,450 tons" },
          { title: "Species Protected", data: speciesData, value: "1,230 species" },
          { title: "Communities Helped", data: communityData, value: "45 villages" }].map((c, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/70 rounded-xl p-6 shadow-lg text-center border border-slate-700"
          >
            <h2 className="font-semibold mb-4 text-cyan-400">{c.title}</h2>
            <Doughnut data={c.data} />
            <p className="mt-2 font-bold text-cyan-400">{c.value}</p>
          </motion.div>
        ))}
      </section>

      {/* Extra Metrics */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">More Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {extraData.map((d, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-cyan-500 rounded-xl p-6 shadow-lg"
            >
              <p className="text-sm mb-2">{d.label}</p>
              <p className="text-2xl font-bold text-cyan-400">{d.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Top Zones / Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-slate-800/50 border border-cyan-500 rounded-xl p-6 shadow-lg backdrop-blur-md overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${h.bgImg})` }}
              ></div>
              <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">{h.zone}</h3>
              <p className="text-sm mb-1 relative z-10 text-slate-300">Risk: <span className="font-bold text-red-400">{h.risk}</span></p>
              <p className="text-sm mb-2 relative z-10 text-slate-300">Priority Score: <span className="font-bold text-cyan-400">{h.priority}</span></p>
              <p className="font-semibold text-cyan-400 relative z-10">{h.metric}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Voices from the Field</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-cyan-500 rounded-xl p-6 shadow-lg backdrop-blur-md flex-1"
            >
              <p className="text-slate-200 mb-4 italic">{t.text}</p>
              <p className="text-cyan-400 font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <motion.a
          href="/map"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22d3ee" }}
          className="bg-slate-800 border border-cyan-400 text-white font-bold px-8 py-4 rounded-full shadow-lg inline-block hover:bg-cyan-600 hover:text-black transition-all"
        >
          Explore Map & Zones
        </motion.a>
      </div>
    </div>
  );
};

export default Impact;
