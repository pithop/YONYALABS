import React from 'react';
import Hero from '../components/Hero';
import Estimator from '../components/Estimator';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Example from '../components/Example';
import LocalPresence from '../components/LocalPresence';
import Process from '../components/Process';
import WhyMe from '../components/WhyMe';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Estimator />
      <Services />
      <Portfolio />
      <Example />
      <LocalPresence />
      <Process />
      <WhyMe />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;