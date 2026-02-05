import React from "react";
import mapImg from "/assets/mapPre.png"; // replace with your image

const features = [
  "AI-verified restoration zones",
  "Satellite and drone imagery",
  "Real-time ecological indicators",
  "Publicly auditable impact records",
];

const MapPreview = () => {
  return (
    <section className="relative py-20  bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div className="text-left ml-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-roboto">
            A Living Map of Ocean Recovery
          </h2>

          <p className="text-lg text-white/80 mb-6 max-w-xl">
            Every restoration site is mapped, monitored, and continuously
            evaluated using geospatial data and machine intelligence.
          </p>

          <ul className="space-y-3 text-white/70 text-base">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-white/60"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-white/90 transition-all shadow-lg">
              Open Interactive Map
            </button>
          </div>
        </div>

        {/* Right map preview */}
        <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/10">
          <img
            src={mapImg}
            alt="Ocean restoration map preview"
            className="w-full h-full object-cover"
          />

          {/* Overlay label */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs  tracking-widest uppercase text-white">
            Live Zones
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;
