import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Shield, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [{
  path: "/",
  label: "Home"
}, {
  path: "/transport",
  label: "Transport Routes"
}, {
  path: "/safety",
  label: "Women Safety"
}, {
  path: "/coverage",
  label: "Coverage Area"
}, {
  path: "/about",
  label: "About Us"
}, {
  path: "/contact",
  label: "Contact"
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <Shield className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">SmartStreet</span>
              <span className="text-xs text-muted-foreground block -mt-1">Kolkata</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                {link.label}
              </Link>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/transport">
                <MapPin className="w-4 h-4" />
                Find Routes
              </Link>
            </Button>
            <Button variant="safety" size="sm" asChild>
              <Link to="/safety">
                <Phone className="w-4 h-4" />
                Safety Mode
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background border-b border-border overflow-hidden">
            <div className="container py-4 space-y-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                  {link.label}
                </Link>)}
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link to="/transport" onClick={() => setIsOpen(false)}>
                    <MapPin className="w-4 h-4" />
                    Find Routes
                  </Link>
                </Button>
                <Button variant="safety" asChild>
                  <Link to="/safety" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4" />
                    Safety Mode
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </Shield>;
};
export default Navbar;