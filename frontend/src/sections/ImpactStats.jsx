import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8000, label: "Marine lives protected" },
  { value: 50, label: "Mangrove saplings planted" },
  { value: 180, label: "tons Carbon captured naturally" },
];

const ImpactStats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (!visible) return;

  stats.forEach((stat, i) => {
    let start = 0;
    const end = stat.value;
    const duration = 3500; // SLOWER
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCounts((prev) => {
        const copy = [...prev];
        copy[i] = Math.floor(start);
        return copy;
      });
    }, stepTime);
  });
}, [visible]);


  return (
    <section
      ref={ref}
      className="py-20 bg-slate-900 text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-roboto">
        Live Environmental Impact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <p className="text-5xl font-bold text-cyan-400">
              {counts[i].toLocaleString()}+
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
