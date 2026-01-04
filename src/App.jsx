import React, { useState, useEffect } from 'react'
import CommentComponent from './components/CommentComponent'
import ThoughtProcess from './components/ThoughtProcess'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  // Listen for theme changes to keep ThoughtProcess in sync
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#333333] transition-all duration-300 relative overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto p-4 sm:p-8">
        <div className="w-full lg:w-2/3 py-8">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-slate-800 dark:text-white text-4xl font-bold mb-2">Technical Assignment</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Advanced React Component Implementation</p>
          </div>
          <ThoughtProcess isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Floating Comment Component - Exactly as before */}
      <CommentComponent />
    </div>
  )
}

export default App
