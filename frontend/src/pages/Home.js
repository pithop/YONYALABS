import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Estimator from '../components/Estimator';
import Portfolio from '../components/Portfolio';
import Example from '../components/Example';
import Process from '../components/Process';
import WhyMe from '../components/WhyMe';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Estimator />
      <Portfolio />
      <Example />
      <Process />
      <WhyMe />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;