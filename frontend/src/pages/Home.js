import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Example from '../components/Example';
import WhyMe from '../components/WhyMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from "../components/ui/sonner"

const Home = () => {
    return (
        <div className="bg-background">
            <Header />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Example />
                <WhyMe />
                <Contact />
            </main>
            <Toaster 
                position="bottom-right"
                toastOptions={{
                    classNames: {
                        toast: 'bg-white border-2 border-turquoise shadow-lg',
                        title: 'text-dark-navy font-bold',
                        description: 'text-gray-600',
                        success: 'border-fresh-green',
                    },
                }}
            />
            <Footer />
        </div>
    );
};

export default Home;