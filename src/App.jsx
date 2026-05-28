import { useState, useEffect } from 'react';
import Header from './components/Header';
import BusinessCard from './components/BusinessCard';
import ProjectList from './components/ProjectList';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen py-8 md:py-16 relative transition-colors duration-300">
      
      {/* Theme Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-surface-white dark:bg-dark-surface border border-border-subtle dark:border-dark-border shadow-ambient hover:shadow-hover transition-all text-on-surface dark:text-dark-on-surface"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
      </button>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-6 w-full flex flex-col gap-8"
      >
        <Header />
        <BusinessCard />
        <ProjectList />
        <CallToAction />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;
