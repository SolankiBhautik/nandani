import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import navLogo from "@/assets/nav_logo.png";
import { motion, Variants } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm md:text-lg font-semibold transition-colors ${
      isActive
        ? "text-primary font-medium"
        : "text-black hover:text-primary"
    }`;

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const navbarVariants: Variants = {
    hidden: {
      y: 0,
      opacity: 1,
      scale: 0.95,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:w-[95%] max-w-6xl">
        <motion.div
          className="bg-white/40 backdrop-blur-xl rounded-full px-4 py-3 shadow-lg border-white border-2 w-fit md:w-auto mx-auto"
          variants={navbarVariants}
        >
          <div className="flex items-center justify-center w-fit md:w-auto md:justify-between">
            <motion.div variants={child}>
              <NavLink
                to="/"
                className="hidden md:block text-xl font-bold text-black"
              >
                <img src={navLogo} className="h-10" alt="Nandani Logo" />
              </NavLink>
            </motion.div>
            {/* Desktop Navigation */}
            <div className="flex items-center gap-4 md:gap-8">
              {navLinks.map((link) => (
                <motion.div
                  variants={child}
                  key={link.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink to={link.path} className={getLinkClass}>
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                variant="default"
                className="hidden md:inline-flex rounded-full bg-primary hover:bg-primary/90"
                asChild
              >
                <NavLink to="/contact">Get Started</NavLink>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
