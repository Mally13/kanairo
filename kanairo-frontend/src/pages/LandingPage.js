import React, { useState, useEffect } from "react";
import { LandingNavigation } from "../components/LandingNavigation";
import { LandingHeader } from "../components/LandingHeader";
import { LandingFeatures } from "../components/LandingFeatures";
import { LandingAbout } from "../components/LandingAbout";
import { LandingServices } from "../components/LandingServices";
import { LandingGallery } from "../components/LandingGallery";
import { LandingTeam } from "../components/LandingTeam";
import { LandingTestimonials } from "../components/LandingTestimonials";
import { LandingContact } from "../components/LandingContact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
}); 

function LandingPage() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <LandingNavigation />
      <LandingHeader data={landingPageData.Header} />
      <LandingFeatures data={landingPageData.Features} />
      <LandingAbout data={landingPageData.About} />
      <LandingServices data={landingPageData.Services} />
      <LandingGallery data={landingPageData.Gallery} />
      <LandingTestimonials data={landingPageData.Testimonials} />
      <LandingTeam data={landingPageData.Team} />
      <LandingContact data={landingPageData.Contact} />
    </div>
  )
}

export default LandingPage