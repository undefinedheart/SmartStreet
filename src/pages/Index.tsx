import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  MapPin,
  Shield,
  Bus,
  Phone,
  Navigation,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Bus,
    title: "Local Transport Finder",
    description:
      "Find nearest auto, bus, and shared transport routes across Kolkata with pickup locations and stoppages.",
  },
  {
    icon: Shield,
    title: "Women Safety Module",
    description:
      "Get safest route suggestions with well-lit paths, emergency SOS, and one-tap helpline access.",
  },
  {
    icon: Navigation,
    title: "Route Planning",
    description:
      "Plan your journey with detailed route paths, stoppages, and area-based transport search.",
  },
  {
    icon: MapPin,
    title: "Suburban Connectivity",
    description:
      "Coverage for Greater Kolkata including New Town, Salt Lake, Howrah, Barasat, and more.",
  },
];

const coverageAreas = [
  "Central Kolkata",
  "Salt Lake",
  "New Town",
  "Howrah",
  "Barasat",
  "Madhyamgram",
  "Rajarhat",
  "Garia",
  "Sonarpur",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-foreground">
                  Trusted by Kolkata Commuters
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Safe Travel Across{" "}
                <span className="text-gradient-primary">Kolkata & Beyond</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Your smart companion for local transport and women safety.
                Navigate the city with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/transport">
                    <MapPin className="w-5 h-5" />
                    Find Local Routes
                  </Link>
                </Button>
                <Button variant="safety" size="xl" asChild>
                  <Link to="/safety">
                    <Shield className="w-5 h-5" />
                    Activate Safety Mode
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-primary-foreground" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Map Illustration */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-card shadow-medium border border-border overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgb3BhY2l0eT0iMC4zIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
                  
                  {/* Route Markers */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-primary shadow-medium flex items-center justify-center"
                  >
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-success shadow-medium flex items-center justify-center"
                  >
                    <Shield className="w-6 h-6 text-success-foreground" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/3 left-1/2 w-12 h-12 rounded-full bg-accent shadow-accent flex items-center justify-center"
                  >
                    <Bus className="w-6 h-6 text-accent-foreground" />
                  </motion.div>

                  {/* Route Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path
                      d="M100 100 Q200 150 200 200 T300 300"
                      fill="none"
                      stroke="hsl(185 65% 28%)"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                      opacity="0.5"
                    />
                    <path
                      d="M300 100 Q250 200 200 200 T100 300"
                      fill="none"
                      stroke="hsl(158 64% 42%)"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Smart Features for Safe Travel
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for hassle-free commuting and personal safety
              in Kolkata
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Covering All of Greater Kolkata
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From the heart of Kolkata to suburban areas, we've got you covered
                with comprehensive transport and safety solutions.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link to="/coverage">
                  View Full Coverage
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Bus, label: "Bus Routes", value: "200+" },
                  { icon: Navigation, label: "Auto Stands", value: "500+" },
                  { icon: MapPin, label: "Stoppages", value: "1,000+" },
                  { icon: Shield, label: "Safe Routes", value: "150+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-background shadow-soft border border-border text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Shield className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Access emergency contacts, safe routes, and instant SOS features
              designed specifically for women commuters in Kolkata.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="accent"
                size="xl"
                asChild
                className="text-foreground"
              >
                <Link to="/safety">
                  <Phone className="w-5 h-5" />
                  Access Safety Features
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">24/7 Emergency Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
