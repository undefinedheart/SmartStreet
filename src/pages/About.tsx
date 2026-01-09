import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Shield, Target, Users, Heart, MapPin, Lightbulb } from "lucide-react";
const values = [{
  icon: Shield,
  title: "Safety First",
  description: "We prioritize the safety of every commuter, especially women, with robust safety features and emergency support."
}, {
  icon: Target,
  title: "Locally Focused",
  description: "Built specifically for Kolkata and Greater Kolkata, understanding the unique needs of our city's commuters."
}, {
  icon: Users,
  title: "Community Driven",
  description: "Powered by community feedback and local insights to continuously improve transport information."
}, {
  icon: Heart,
  title: "Accessible to All",
  description: "Free, easy-to-use platform accessible to all commuters regardless of technical expertise."
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-hero overflow-hidden">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient-primary">SmartStreet</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering Kolkata commuters with smart transport solutions and
              comprehensive safety features
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Making Kolkata Safer & More Connected
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">SmartStreet was born from a simple observation: navigating Kolkata's vast public transport network can be overwhelming, and safety concerns, especially for women commuters, often go unaddressed.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're building a platform that combines local transport
                knowledge with women safety features, creating a comprehensive
                solution for daily commuters across Kolkata and Greater Kolkata.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to make every journey safer, simpler, and more
                informed – whether you're traveling from Garia to Esplanade or
                Barasat to Salt Lake.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              <div className="p-8 rounded-3xl bg-gradient-primary text-primary-foreground">
                <MapPin className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="text-xl font-bold mb-4">
                  Built for Kolkata, by Kolkata
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">We understand the streets, the routes, the stops, and the unique challenges of commuting in our city. SmartStreet is designed with local insights to serve our community better.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SafeRoute is a community-first initiative. We're constantly
              improving our platform based on feedback from Kolkata commuters.
              Have suggestions or want to contribute? We'd love to hear from
              you.
            </p>
            <motion.div whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="inline-block">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default About;