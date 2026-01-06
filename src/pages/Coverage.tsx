import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { MapPin, CheckCircle } from "lucide-react";

const coverageZones = [
  {
    name: "Central Kolkata",
    areas: ["Esplanade", "Park Street", "Sealdah", "College Street", "BBD Bagh", "Dalhousie"],
    highlight: true,
  },
  {
    name: "North Kolkata",
    areas: ["Shyambazar", "Baghbazar", "Hatibagan", "Sovabazar", "Girish Park", "Kankurgachi"],
    highlight: false,
  },
  {
    name: "South Kolkata",
    areas: ["Garia", "Jadavpur", "Tollygunge", "Ballygunge", "Gariahat", "Rashbehari"],
    highlight: false,
  },
  {
    name: "Salt Lake & New Town",
    areas: ["Sector I-V", "Nicco Park", "City Centre", "Eco Park", "Unitech", "Rajarhat"],
    highlight: true,
  },
  {
    name: "Howrah",
    areas: ["Howrah Station", "Shibpur", "Santragachi", "Belur", "Liluah", "Bamunari"],
    highlight: false,
  },
  {
    name: "Suburban North",
    areas: ["Barasat", "Madhyamgram", "Barrackpore", "Naihati", "Dum Dum", "Jessore Road"],
    highlight: true,
  },
  {
    name: "Suburban South",
    areas: ["Sonarpur", "Narendrapur", "Baruipur", "Rajpur", "Garia Station", "Kamalgazi"],
    highlight: false,
  },
  {
    name: "Eastern Suburbs",
    areas: ["Baguiati", "VIP Road", "Lake Town", "Kaikhali", "Airport", "Bidhannagar"],
    highlight: false,
  },
];

const Coverage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient-primary">Coverage</span> Area
            </h1>
            <p className="text-lg text-muted-foreground">
              Serving Kolkata and Greater Kolkata with comprehensive transport
              and safety solutions across all major zones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Map Visual */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coverageZones.map((zone, index) => (
                <motion.div
                  key={zone.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-5 rounded-2xl border ${
                    zone.highlight
                      ? "bg-primary/5 border-primary/20"
                      : "bg-gradient-card border-border"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin
                      className={`w-5 h-5 ${
                        zone.highlight ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-semibold text-foreground">{zone.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {zone.areas.map((area) => (
                      <li
                        key={area}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Coverage Statistics
            </h2>
            <p className="text-muted-foreground">
              Comprehensive coverage across the metropolitan area
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "8+", label: "Zones Covered" },
              { value: "50+", label: "Areas Serviced" },
              { value: "1000+", label: "Transport Stops" },
              { value: "24/7", label: "Safety Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coverage;
