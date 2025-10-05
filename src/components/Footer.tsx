import { Link, NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { servicesList } from "@/lib/servicesData";
import logo from "@/assets/footer-logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center md:text-left bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <NavLink to="/" className="mb-4 block">
              <img src={logo} className="h-10" />
            </NavLink>
            <p className="text-gray-300 text-sm">
              Empowering international students and professionals to achieve
              their career dreams in the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {servicesList.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:jaynilrupareliya04@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  jaynilrupareliya04@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+919712483235"
                  className="hover:text-primary transition-colors"
                >
                  +91 9712483235
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Nandani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
