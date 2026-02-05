// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Bar, Pie } from "react-chartjs-2";
import { projects } from "../data/projects"; // create an array of projects with relevant info
import "chart.js/auto";

const Projects = () => {
  // Chart Data
  const barData = {
    labels: projects.map(p => p.name),
    datasets: [
      {
        label: "CO₂ Sequestration (tons)",
        data: projects.map(p => p.co2),
        backgroundColor: "#34d399",
      },
      {
        label: "Species Protected",
        data: projects.map(p => p.species),
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const pieData = {
    labels: projects.map(p => p.name),
    datasets: [
      {
        label: "Communities Impacted",
        data: projects.map(p => p.communities),
        backgroundColor: projects.map(() => `hsl(${Math.random()*360},70%,50%)`),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Our Major Projects</h1>
        <p className="text-slate-300 mt-2 text-lg md:text-xl">
          Driving impact across ecosystems and communities
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/80 rounded-2xl shadow-2xl overflow-hidden"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
              <p className="text-slate-300 mb-2">{proj.partner || "Eco Alliance"}</p>
              <div className="flex justify-between mb-2 text-sm text-slate-400">
                <span>{proj.duration || "12 months"}</span>
                <span>${proj.cost || "250,000"}</span>
              </div>
              <p className="text-slate-300 text-sm">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Impact Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-800/80 p-6 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">CO₂ vs Species Protected</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-slate-800/80 p-6 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Communities Impacted</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Testimonials / Feedback */}
      <div className="bg-slate-800/80 p-6 rounded-2xl shadow-2xl mb-12">
        <h3 className="text-2xl font-bold mb-4">What People Say</h3>
        <div className="flex flex-wrap gap-6">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-700/40 p-4 rounded-xl shadow-inner flex-1 min-w-[250px]"
            >
              <p className="text-slate-200 italic">"{proj.review || "Amazing project with tangible impact!"}"</p>
              <p className="mt-2 text-sm text-slate-400 font-semibold">- {proj.reviewer || "Local NGO"}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
