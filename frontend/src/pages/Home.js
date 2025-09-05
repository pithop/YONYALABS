// frontend/src/pages/Home.js

import React from 'react';
// On retire les imports inutiles : Header, Footer, Toaster
import Hero from '../components/Hero';
import Services from '../components/Services';
import Estimator from '../components/Estimator';
import Portfolio from '../components/Portfolio';
import Example from '../components/Example';
import WhyMe from '../components/WhyMe';
import Contact from '../components/Contact';

const Home = () => {
    return (
        // On peut utiliser un Fragment React (<>...</>) car App.js gère déjà la balise <main>
        <>
            <Hero />
            <Services />
            <Estimator />
            <Portfolio />
            <Example />
            <WhyMe />
            <Contact />
        </>
    );
};

export default Home;