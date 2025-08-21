import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyMe from "../components/WhyMe";
import Example from "../components/Example";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <WhyMe />
      <Example />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;