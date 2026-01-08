import { Link } from "react-router-dom";
import { Shield, MapPin, Phone, Mail, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">SmartStreet</span>
                <span className="text-xs text-muted-foreground block -mt-1">Kolkata</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted companion for safe and smart travel across Kolkata and Greater Kolkata region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{
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
            }].map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Emergency Contacts</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-destructive" />
                Women Helpline: 1091 / 181
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Kolkata Police: 100
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-success" />
                Ambulance: 102
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">support@smartstreet.in<Mail className="w-4 h-4" />
                support@saferoute.in
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kolkata, West Bengal
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for Kolkata
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;