// src/pages/ZoneDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { zones } from "../data/zones";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
);

const ZoneDetail = () => {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const zone = zones.find((z) => z.id === zoneId);

  if (!zone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-300 text-xl font-medium">
        Zone not found
      </div>
    );
  }

  // Chart Data
  const riskData = {
    labels: ["Temperature", "Vegetation", "Urban Proximity", "Shipping"],
    datasets: [
      {
        label: "Risk Factors",
        data: [25, zone.ndvi ? zone.ndvi * 100 : 65, 20, 30],
        backgroundColor: ["#f87171", "#4ade80", "#60a5fa", "#22d3ee"],
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  };

  const envData = {
    labels: ["Sea Temp", "Chlorophyll", "Water Clarity", "NDVI", "Shipping"],
    datasets: [
      {
        label: "Environmental Metrics",
        data: [
          parseFloat(zone.seaTemp) || 29,
          parseFloat(zone.chlorophyll) || 1.2,
          zone.waterClarity === "Good" ? 80 : 50,
          zone.ndvi ? zone.ndvi * 100 : 65,
          zone.shipping === "High" ? 80 : 40,
        ],
        backgroundColor: "#3b82f6",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-4 sm:px-6 py-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <button
            onClick={() => navigate("/map")}
            className="flex items-center gap-2 text-slate-400 hover:text-white font-medium px-4 py-2.5 hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Map
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-5 py-2 rounded-lg mb-2">
              <span className="text-sm font-medium text-blue-400">{zone.type}</span>
              <span className="text-slate-600">•</span>
              <span className="text-sm font-medium text-slate-400">ID: {zone.id}</span>
            </div>
          </div>
          
          <div className="w-24"></div>
        </div>

        {/* Zone Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            {zone.name}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Detailed analysis and restoration strategy for this conservation zone
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Risk Level", value: zone.risk, color: zone.risk === 'High' ? 'text-red-400' : zone.risk === 'Medium' ? 'text-amber-400' : 'text-emerald-400', bar: zone.risk === 'High' ? 'w-4/5 bg-red-500' : zone.risk === 'Medium' ? 'w-2/3 bg-amber-500' : 'w-1/3 bg-emerald-500' },
            { label: "Priority", value: zone.priority, sub: `Score: ${zone.priorityScore || 82}/100`, color: 'text-blue-400' },
            { label: "CO₂ Sequestration", value: zone.co2, sub: "Annual estimate", color: 'text-emerald-400' },
            { label: "Species Protected", value: zone.species, sub: "Endangered species", color: 'text-violet-400' }
          ].map((metric, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{metric.label}</div>
              <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
              {metric.bar ? (
                <div className="h-1.5 w-full bg-slate-700 rounded-full mt-3 overflow-hidden">
                  <div className={`h-full ${metric.bar}`}></div>
                </div>
              ) : (
                <div className="text-sm text-slate-400 mt-1">{metric.sub}</div>
              )}
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Risk Assessment</h2>
                <div className="flex items-center gap-3">
                  <div className="bg-red-900/30 border border-red-500/20 px-4 py-2 rounded-lg">
                    <div className="text-xs font-medium text-red-400">Current Risk</div>
                    <div className="text-lg font-bold text-red-400">{zone.risk}</div>
                  </div>
                  <div className="bg-emerald-900/30 border border-emerald-500/20 px-4 py-2 rounded-lg">
                    <div className="text-xs font-medium text-emerald-400">Confidence</div>
                    <div className="text-lg font-bold text-emerald-400">{zone.confidence || "High"}</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 space-y-2">
                <h3 className="font-semibold text-slate-300 mb-3">Top Risk Factors</h3>
                {[
                  { label: "Temperature Rise", val: "Critical", color: "text-red-400" },
                  { label: "Vegetation Index", val: `NDVI ${zone.ndvi || "0.65"}`, color: "text-amber-400" },
                  { label: "Urban Proximity", val: "20km", color: "text-slate-400" },
                  { label: "Shipping Activity", val: zone.shipping || "High", color: "text-red-400" }
                ].map((risk, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700/50">
                    <span className="font-medium text-slate-300">{risk.label}</span>
                    <span className={`${risk.color} font-semibold`}>{risk.val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-sm font-semibold text-slate-400 mb-4 text-center">Risk Factor Distribution</h3>
                <div className="h-64">
                  <Doughnut 
                    data={riskData}
                    options={{
                      cutout: '65%',
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: { color: '#94a3b8', padding: 20, usePointStyle: true }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-6">Environmental Data</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Sea Surface Temp", val: `${zone.seaTemp || "29"}°C`, color: "text-blue-400" },
                  { label: "Chlorophyll", val: `${zone.chlorophyll || "1.2"} mg/m³`, color: "text-emerald-400" },
                  { label: "Water Clarity", val: zone.waterClarity || "Good", color: "text-cyan-400" },
                  { label: "Vegetation", val: `NDVI ${zone.ndvi || "0.65"}`, color: "text-violet-400" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <div className="text-xs font-medium text-slate-500 mb-1">{item.label}</div>
                    <div className={`text-2xl font-bold ${item.color}`}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-800 rounded-xl p-6 border border-blue-500/20">
              <h2 className="text-xl font-bold text-white mb-4">Restoration Priority</h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-blue-400">{zone.priorityScore || 82}</span>
                <span className="text-lg text-slate-500">/100</span>
                <span className="ml-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">
                  Rank #{zone.rank || 3}
                </span>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  {[
                    { dot: "bg-red-500", txt: "High risk assessment confidence" },
                    { dot: "bg-emerald-500", txt: "Strong carbon potential: 75/100" },
                    { dot: "bg-violet-500", txt: `Rich biodiversity: ${zone.vhiPercent || 80}%` }
                  ].map((driver, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${driver.dot} rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]`}></div>
                      <span className="text-slate-300">{driver.txt}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "CO₂ Sequestration", val: zone.co2, color: "text-emerald-400" },
                    { label: "Species Protected", val: zone.species, color: "text-violet-400" },
                    { label: "Communities", val: `${zone.communities} villages`, color: "text-amber-400" },
                    { label: "Economic Impact", val: `$${zone.cost ? (parseInt(zone.cost.replace(',', '')) / 1000).toFixed(0) : "250"}K`, color: "text-blue-400" }
                  ].map((impact, i) => (
                    <div key={i} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                      <div className="text-xs font-medium text-slate-500">{impact.label}</div>
                      <div className={`text-lg font-bold ${impact.color}`}>{impact.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-6">Environmental Metrics</h2>
              <div className="h-72">
                <Bar
                  data={envData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      y: {
                        grid: { color: '#334155' },
                        ticks: { color: '#94a3b8' }
                      },
                      x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                      }
                    }
                  }}
                />
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-6 text-center">Restoration Plan</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Partner NGO", val: zone.partner || "Eco Alliance" },
                  { label: "Project Name", val: zone.project || "Mangrove Revival" },
                  { label: "Duration", val: zone.duration || "12 months" },
                  { label: "Project Cost", val: `$${zone.cost || "250,000"}` }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                    <div className="text-xs font-medium text-slate-500 mb-1">{item.label}</div>
                    <div className="font-semibold text-slate-200">{item.val}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/20">
                  View Detailed Restoration Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneDetail;