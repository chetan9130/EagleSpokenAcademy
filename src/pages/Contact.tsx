import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      info: "+91 97656 99626",
      link: "https://wa.me/919765699626",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "eaglespokenenglish@gmail.com",
      link: "mailto:eaglespokenenglish@gmail.com",
    },
    {
      icon: MapPin,
      title: "Our Locations",
      info: [
        "Add1 - Eagle Spoken English Academy, Vedant Sankul, Manik Chowk, Chakan, Maharashtra 410501",
        "Add2 - Eagle Spoken English Academy, Appaji Complex, near MIT College, Vishweshwar Nagar, Tapkir Nagar, Alandi, Pimpri-Chinchwad, Maharashtra 412105",
      ],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">

          {/* ✅ Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow block"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <item.icon size={24} className="text-accent" />
                </div>

                <h3 className="font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                {/* 🔥 FIXED WITH ICON PER LINE */}
                <div className="text-sm text-muted-foreground space-y-2">
                  {Array.isArray(item.info) ? (
                    item.info.map((line, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 justify-center"
                      >
                        <MapPin size={16} className="mt-1 text-accent" />
                        <span>{line}</span>
                      </div>
                    ))
                  ) : (
                    <p>{item.info}</p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              {
                icon: Instagram,
                label: "@eagle_spoken_english",
                href: "https://www.instagram.com/rahul_barde_official",
              },
              {
                icon: Facebook,
                label: "Facebook",
                href: "https://www.facebook.com/1785313851780932/",
              },
              {
                icon: Youtube,
                label: "YouTube",
                href: "https://www.youtube.com/@EagleSpokenEnglish",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:shadow-md transition-shadow text-sm text-foreground"
              >
                <s.icon size={18} className="text-accent" />
                {s.label}
              </a>
            ))}
          </div>

          {/* Map Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
              Find Us on Map
            </h2>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Visit our academy and explore our learning environment.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.665121691628!2d73.8611054!3d18.753487600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c970bb144c27%3A0x81284b6e6667d634!2sEagle%20Spoken%20English%20Academy!5e1!3m2!1sen!2sin!4v1776452057831!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Map 1"
              ></iframe>

              <br />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.4066581164516!2d73.8907147!3d18.6720342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9f8981978d5%3A0xa52d9e83f401d583!2sEagle%20Spoken%20English%20Academy!5e1!3m2!1sen!2sin!4v1776452565865!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Map 2"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border"
              />

              <input
                type="email"
                placeholder="Your Email *"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border"
              />

              <textarea
                placeholder="Your Message *"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border"
              />

              <button className="w-full bg-primary text-white py-3 rounded-lg">
                Send Message
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
