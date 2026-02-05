import React from "react";
import footerBg from "/assets/foot.png"; // your background image

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3 font-roboto">
            Ocean Repair Market
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            A transparent platform for funding and verifying global ocean
            restoration using geospatial data and machine intelligence.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
            Platform
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Interactive Map</li>
            <li>Impact Ledger</li>
            <li>Verification System</li>
            <li>Restoration Projects</li>
          </ul>
        </div>

        {/* Organization */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
            Organization
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>About</li>
            <li>Partners</li>
            <li>Research</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Data Transparency</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <span>© {new Date().getFullYear()} Ocean Repair Market</span>
          <span>All restoration data is independently verifiable</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
