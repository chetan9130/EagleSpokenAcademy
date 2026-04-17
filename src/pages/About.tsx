import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Target,
  Award,
  Globe,
  Lightbulb,
  UserCheck,
  Sparkles,
  Shield,
} from "lucide-react";

const stats = [
  { label: "Students Trained", value: "50,000+", icon: Users },
  { label: "Expert Trainers", value: "15+", icon: Award },
  { label: "Locations", value: "Multiple", icon: Globe },
  { label: "Success Rate", value: "95%", icon: Target },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in teaching and learning",
    icon: Sparkles,
  },
  {
    title: "Innovation",
    description: "Continuously updating methods to reflect modern trends",
    icon: Lightbulb,
  },
  {
    title: "Personalization",
    description:
      "Customized attention for each student's unique needs",
    icon: UserCheck,
  },
  {
    title: "Practical Focus",
    description:
      "Real-world communication skills over theoretical knowledge",
    icon: Target,
  },
  {
    title: "Support",
    description:
      "Creating a friendly, encouraging learning environment",
    icon: Shield,
  },
];

const images = ["/class-1.jpeg", "/class-2.jpeg", "/class-3.jpeg"];

const About = () => {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Eagle Spoken English Academy — Bridging the gap between academic
            standards and business requirements since 2009.
          </p>
        </div>
      </section>

      {/* Mission + Slider */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our purpose is to ensure that students acquire the language
              abilities they need to advance and achieve their English language
              objectives.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our mission is to empower individuals with confident English
              communication skills.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              Our Approach
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              We focus on practical spoken English skills to help students
              communicate confidently in real-world situations.
            </p>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="bg-hero-bg rounded-2xl p-6 text-center overflow-hidden">

            {/* Image */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src={images[current]}
                alt="slider"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {/* Text */}
            <p className="text-xl font-heading font-bold text-foreground mt-6">
              English for Everyone
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Where Confidence Meets Communication
            </p>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-primary" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <v.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon size={28} className="text-accent" />
                </div>
                <p className="text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Who Can Join?
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Anyone with a desire to improve their English can benefit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎓", title: "Students" },
              { emoji: "💼", title: "Professionals" },
              { emoji: "🔍", title: "Job Seekers" },
              { emoji: "🏠", title: "Homemakers" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-5xl block mb-4">
                  {item.emoji}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;