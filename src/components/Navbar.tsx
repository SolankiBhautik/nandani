import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import navLogo from "@/assets/nav_logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm md:text-lg font-semibold transition-colors ${
      isActive ? "text-primary font-medium" : "text-black hover:text-primary"
    }`;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:w-[95%] max-w-6xl">
      <div className="bg-white/40 backdrop-blur-xl rounded-full px-4 py-3 shadow-lg border-white border-4 w-fit md:w-auto mx-auto">
        <div className="flex items-center justify-center w-fit md:w-auto md:justify-between">
          <NavLink to="/" className="hidden md:block text-xl font-bold text-black">
            <img src={navLogo} className="h-10" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={getLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <Button
            variant="default"
            className="hidden md:inline-flex rounded-full bg-primary hover:bg-primary/90"
            asChild
          >
            <NavLink to="/contact">Get Started</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
