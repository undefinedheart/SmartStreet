import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const emergencyContacts = [{
  name: "Women Helpline",
  number: "1091 / 181"
}, {
  name: "Kolkata Police",
  number: "100"
}, {
  name: "Ambulance",
  number: "102"
}, {
  name: "Police Control Room",
  number: "033-22143230"
}];
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible."
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-hero">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Contact & <span className="text-gradient-primary">Help</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for support, feedback, or emergency
              assistance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-destructive/10 border-y border-destructive/20">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Emergency?</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {emergencyContacts.map(contact => <a key={contact.number} href={`tel:${contact.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-destructive/30 transition-colors">
                  <Phone className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-medium">
                    {contact.name}: {contact.number}
                  </span>
                </a>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help?" value={formData.subject} onChange={e => setFormData({
                  ...formData,
                  subject: e.target.value
                })} required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell us more about your query..." rows={5} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} required />
                </div>

                <Button variant="hero" size="lg" type="submit">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:support@saferoute.in" className="text-muted-foreground hover:text-primary transition-colors">support@smartstreet.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Kolkata, West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground">
                <h3 className="font-bold text-lg mb-3">Need Immediate Help?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  For emergencies, please use the emergency contacts above or
                  access the Safety Mode from our app for instant SOS features.
                </p>
                <Button variant="accent" size="sm" asChild>
                  <a href="/safety">Go to Safety Mode</a>
                </Button>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-gradient-card">
                <h3 className="font-bold text-lg mb-3">Feedback Welcome</h3>
                <p className="text-muted-foreground text-sm">Help us improve SmartStreet by sharing your suggestions, reporting issues, or letting us know about routes and areas we should add to our coverage.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;