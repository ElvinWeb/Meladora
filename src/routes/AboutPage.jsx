import React from "react";
import About from "../components/About/about";
import Gallery from "../components/Gallery/Gallery";
import RootLayout from "../Layouts/RootLayout";

const AboutPage = () => {
  return (
    <RootLayout>
      <About />
      <Gallery />
    </RootLayout>
  );
};
export default AboutPage;
