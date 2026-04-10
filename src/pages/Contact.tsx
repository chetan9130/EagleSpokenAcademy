import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Email Us", info: "hello@learn.com" },
              { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Visit Us", info: "123 Learning St, San Francisco, CA" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.info}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  maxLength={100}
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  maxLength={255}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={200}
              />
              <textarea
                placeholder="Your Message *"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                maxLength={1000}
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
