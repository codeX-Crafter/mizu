import { useEffect } from "react";

export default function RippleCursor() {
  useEffect(() => {
    const handler = (e) => {
      const dot = document.createElement("div");

      dot.className =
        "fixed w-2 h-2 rounded-full bg-cyan-300/70 pointer-events-none " +
        "z-[9999] animate-[fade_0.8s_linear]";

      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return null;
}
