"use client";
import Hero from "../components/Hero/Hero";
import FeaturesSection from "../components/FeaturesSection/featuresSection";
import SplitTransitionVideo from "../components/SplitTransitionVideo/SplitTransitionVideo";
import Strip from "../components/Strip/Strip";
import AboutProfDux from "../components/AboutProfDux/AboutProfDux";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Strip/>
      <FeaturesSection />
      <Strip/>
      <SplitTransitionVideo/>
      <Strip/>
      <AboutProfDux/>
      <Footer/>
    </>
  );
}

