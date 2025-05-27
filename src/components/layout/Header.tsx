import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", to: "hero" },
    { name: "Produtos", to: "produtos" },
    { name: "Sobre", to: "about" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="hero"
              className="text-2xl font-bold text-primary cursor-pointer"
              smooth={true}
              duration={500}
            >
              Elegance Jewelry
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer"
                    smooth={true}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button (com animação estilo hambúrguer do primeiro código) */}
            <button
              className="md:hidden text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-primary transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-primary transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu com animação estilo "fullscreen" do primeiro código */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={item.to}
                    className="text-primary text-2xl font-medium hover:text-secondary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 text-center"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
