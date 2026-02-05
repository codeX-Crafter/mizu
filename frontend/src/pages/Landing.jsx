import React from "react";
import Hero from "../sections/Hero";
import Problems from "../sections/Problems";
import Solution from "../sections/Solution";
import MapPreview from "../sections/MapPreview";
import ImpactStats from "../sections/ImpactStats";

function Landing() {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <Problems />
      <Solution />
      <MapPreview />
    </div>
  );
}

export default Landing;
