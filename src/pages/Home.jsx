// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import NavBar from '../components/Navbar';
import Features from '../components/Features';
import Story from '../components/Story';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-[url(/img/background.png)]'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Footer />
    </main>
  );
};

export default Home;
