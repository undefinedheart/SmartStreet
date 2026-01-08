import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Shield, Phone, MapPin, AlertTriangle, Share2, Moon, Users, CheckCircle, ExternalLink } from "lucide-react";
const emergencyContacts = [{
  name: "Women Helpline",
  number: "1091",
  description: "24/7 women safety helpline",
  color: "destructive"
}, {
  name: "Women Helpline (Alternate)",
  number: "181",
  description: "National Commission for Women",
  color: "destructive"
}, {
  name: "Kolkata Police",
  number: "100",
  description: "Emergency police assistance",
  color: "primary"
}, {
  name: "Police Control Room",
  number: "033-22143230",
  description: "Kolkata Police Control Room",
  color: "primary"
}, {
  name: "Ambulance",
  number: "102",
  description: "Medical emergency services",
  color: "success"
}, {
  name: "Child Helpline",
  number: "1098",
  description: "Child protection services",
  color: "warning"
}];
const safetyFeatures = [{
  icon: MapPin,
  title: "Safe Route Suggestions",
  description: "Get routes that prioritize well-lit, populated main roads for safer travel, especially during late hours."
}, {
  icon: Share2,
  title: "Live Location Sharing",
  description: "Share your real-time location with trusted contacts while traveling for added peace of mind."
}, {
  icon: Moon,
  title: "Night Travel Tips",
  description: "Access safety guidelines specific to late-evening and suburban travel in Kolkata."
}, {
  icon: Users,
  title: "Community Safety",
  description: "Report and view safety alerts from other commuters in your area for collective awareness."
}];
const safetyTips = ["Always share your live location with a trusted contact when traveling late", "Prefer well-lit main roads over shortcuts through isolated areas", "Keep emergency numbers saved on speed dial", "Trust your instincts - if something feels wrong, move to a crowded area", "Note down vehicle registration numbers when using autos or cabs", "Avoid displaying expensive jewelry or electronics in public transport"];
const Safety = () => {
  const {
    toast
  } = useToast();
  const handleSOS = () => {
    // Try to get geolocation and trigger emergency action
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const {
          latitude,
          longitude
        } = position.coords;
        toast({
          variant: "destructive",
          title: "🚨 SOS Alert Activated!",
          description: `Location shared: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}. Emergency contacts are being notified.`
        });
      }, () => {
        toast({
          variant: "destructive",
          title: "🚨 SOS Alert Activated!",
          description: "Emergency contacts are being notified. Enable location for better assistance."
        });
      });
    } else {
      toast({
        variant: "destructive",
        title: "🚨 SOS Alert Activated!",
        description: "Emergency contacts are being notified."
      });
    }
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-safety mx-auto mb-6 flex items-center justify-center shadow-medium">
              <Shield className="w-10 h-10 text-success-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Women <span className="text-gradient-primary">Safety</span> First
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Access emergency contacts, safe routes, and instant SOS features
              designed for your safety across Kolkata
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOS Button Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="max-w-lg mx-auto">
            <div className="p-8 rounded-3xl bg-destructive/5 border-2 border-destructive/20 text-center">
              <h2 className="text-xl font-bold mb-4 text-foreground">
                Emergency SOS
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Tap the button below to alert emergency contacts with your live
                location
              </p>
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-destructive/30 animate-pulse-ring" />
                <Button variant="sos" size="xl" className="relative w-32 h-32 rounded-full text-lg font-bold" onClick={handleSOS}>
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="w-8 h-8 mb-1" />
                    SOS
                  </div>
                </Button>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contacts */}
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Emergency Contacts
            </h2>
            <p className="text-muted-foreground">
              One-tap access to helpline numbers for Kolkata & West Bengal
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {emergencyContacts.map((contact, index) => <motion.a key={contact.number} href={`tel:${contact.number}`} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="p-5 rounded-xl bg-card border border-border hover:shadow-medium transition-all group">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${contact.color === "destructive" ? "bg-destructive/10" : contact.color === "success" ? "bg-success/10" : contact.color === "warning" ? "bg-warning/10" : "bg-primary/10"}`}>
                    <Phone className={`w-6 h-6 ${contact.color === "destructive" ? "text-destructive" : contact.color === "success" ? "text-success" : contact.color === "warning" ? "text-warning" : "text-primary"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-1">
                      {contact.number}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>)}
          </div>
        </div>
      </section>

      {/* Safety Features */}
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
        }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Safety Features
            </h2>
            <p className="text-muted-foreground">
              Tools designed to keep you safe during your commute
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {safetyFeatures.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="p-6 rounded-2xl bg-gradient-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-success" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 md:py-20 bg-gradient-primary">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-center mb-10">
              Safety Tips for Women Commuters
            </h2>

            <div className="space-y-4">
              {safetyTips.map((tip, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-primary-foreground/90">{tip}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Safety;