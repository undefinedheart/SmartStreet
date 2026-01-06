import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bus,
  MapPin,
  Search,
  Clock,
  ArrowRight,
  Navigation,
  Car,
} from "lucide-react";

const popularRoutes = [
  {
    from: "Garia",
    to: "Esplanade",
    mode: "Bus",
    routes: ["S12", "S32", "AC12"],
    duration: "45 mins",
  },
  {
    from: "Barasat",
    to: "Salt Lake",
    mode: "Bus",
    routes: ["DN9", "DN9/1"],
    duration: "50 mins",
  },
  {
    from: "Howrah",
    to: "Sealdah",
    mode: "Auto",
    routes: ["Direct Auto"],
    duration: "25 mins",
  },
  {
    from: "New Town",
    to: "Park Street",
    mode: "Bus",
    routes: ["AC47", "235"],
    duration: "40 mins",
  },
  {
    from: "Madhyamgram",
    to: "Sector V",
    mode: "Bus",
    routes: ["215", "218"],
    duration: "35 mins",
  },
  {
    from: "Rajarhat",
    to: "Dum Dum",
    mode: "Auto",
    routes: ["Shared Auto"],
    duration: "30 mins",
  },
];

const transportTypes = [
  {
    icon: Bus,
    name: "Bus",
    description: "AC & Non-AC buses across the city",
    count: "200+ routes",
  },
  {
    icon: Car,
    name: "Auto",
    description: "Point-to-point and shared autos",
    count: "500+ stands",
  },
  {
    icon: Navigation,
    name: "Metro",
    description: "Quick metro connections",
    count: "6 lines",
  },
];

const Transport = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Find Your <span className="text-gradient-primary">Local Transport</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover bus routes, auto stands, and shared transport options
              across Kolkata and Greater Kolkata
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-card shadow-medium border border-border">
              <div className="grid md:grid-cols-[1fr,auto,1fr,auto] gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    From
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter source location"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center h-12">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">To</label>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <Button variant="hero" size="lg" className="h-12">
                  <Search className="w-5 h-5" />
                  Search Routes
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transport Types */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
          >
            Transport Options
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {transportTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-medium transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <type.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{type.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {type.description}
                </p>
                <p className="text-sm font-medium text-primary">{type.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Popular Routes
            </h2>
            <p className="text-muted-foreground">
              Most searched routes by Kolkata commuters
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-card border border-border hover:shadow-soft transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-0.5 h-8 bg-border" />
                      <div className="w-3 h-3 rounded-full bg-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {route.from}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">to</p>
                      <p className="font-semibold text-foreground">
                        {route.to}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {route.mode}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {route.duration}
                  </div>
                  <div className="flex gap-2">
                    {route.routes.map((r) => (
                      <span
                        key={r}
                        className="px-2 py-1 rounded bg-secondary text-xs font-medium"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="outline" size="lg">
              View All Routes
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Transport;
