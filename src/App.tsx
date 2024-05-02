import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FiArrowUp } from "react-icons/fi";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle theme function simplified
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect for handling the theme change
  useEffect(() => {
    // Apply the dark class to the html element based on theme state
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]); // Dependencies array has `theme`, so this runs every time `theme` changes

  const handleScroll = () => {
    const position = window.scrollY;
    setShowScrollTop(position > 28);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "App min-h-screen flex flex-col bg-dappnodeBgLightLayout dark:bg-dappnodeBgDarkLayout"
      }
    >
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 p-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer text-white"
        >
          <FiArrowUp className="text-4xl" />
        </button>
      )}
    </div>
  );
};

export default App;
