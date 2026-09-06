import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
