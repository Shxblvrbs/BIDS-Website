// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import NavBar from '../components/Navbar';
import Features from '../components/Features';
import VSAStory from '../components/VSAStory';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-black md:bg-[url(/img/background.png)]'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <VSAStory />
      <Footer />
    </main>
  );
};

export default Home;
