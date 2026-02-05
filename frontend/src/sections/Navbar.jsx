import React from "react";

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[999]">
      <nav className="bg-white/90 backdrop-blur-md border border-black/10 rounded-full shadow-lg px-6 py-2 flex items-center gap-20 ">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 font-bold text-base tracking-wide text-black">
          <img
            src="/logo.png"
            alt="Mizu logo"
            className="w-8 h-8 object-contain"
          />
          <span>Mizu</span>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-6 text-base font-medium text-black/80">
          <li className="hover:text-black transition cursor-pointer">Map</li>
          <li className="hover:text-black transition cursor-pointer">Impact</li>
          <li className="hover:text-black transition cursor-pointer">Verify</li>
          <li className="hover:text-black transition cursor-pointer">
            Projects
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-base font-semibold text-black hover:underline">
            Login
          </button>
          <button className="px-4 py-1.5 bg-black text-white text-base font-semibold rounded-full hover:bg-slate-800 transition">
            Donate
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
