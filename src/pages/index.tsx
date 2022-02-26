import React from "react";
import DownloadSection from "./download_section";
import FeaturedStays from "./featured_stays";
import Footer from "./footer";
import HomePage from "./homepage";
import PicturesSection from "./pictures_section";

function StellaStays() {
  return (
    <>
      <HomePage />
      <FeaturedStays />
      <DownloadSection />
      <PicturesSection />
      <Footer />
    </>
  );
}

export default StellaStays;
