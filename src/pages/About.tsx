import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe, Heart, Lightbulb, UserCheck, Sparkles, Shield } from "lucide-react";

const stats = [
  { label: "Students Trained", value: "50,000+", icon: Users },
  { label: "Expert Trainers", value: "15+", icon: Award },
  { label: "Locations", value: "Multiple", icon: Globe },
  { label: "Success Rate", value: "95%", icon: Target },
];

const values = [
  { title: "Excellence", description: "We strive for the highest standards in teaching and learning", icon: Sparkles },
  { title: "Innovation", description: "Continuously updating methods to reflect modern trends", icon: Lightbulb },
  { title: "Personalization", description: "Customized attention for each student's unique needs", icon: UserCheck },
  { title: "Practical Focus", description: "Real-world communication skills over theoretical knowledge", icon: Target },
  { title: "Support", description: "Creating a friendly, encouraging learning environment", icon: Shield },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Eagle Spoken English Academy — Bridging the gap between academic standards and business requirements since 2009.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our purpose is to ensure that students acquire the language abilities they need to advance and achieve their English language objectives. We open doors for success whether it's at work, in general life, or at educational institutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our mission is to empower individuals with confident English communication skills that transform their personal and professional lives.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our approach goes beyond traditional grammar-focused teaching. We concentrate on practical spoken English skills to help students communicate confidently in real-world situations. Our experienced, friendly instructors provide personalized attention in a supportive environment.
            </p>
          </div>
          <div className="bg-hero-bg rounded-2xl p-12 text-center">
            <span className="text-8xl">🦅</span>
            <p className="text-xl font-heading font-bold text-foreground mt-6">English for Everyone</p>
            <p className="text-sm text-muted-foreground mt-2">Where Confidence Meets Communication</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <v.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground">{v.description}</p>
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
                <p className="text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Who Can Join?</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We welcome learners from all backgrounds and age groups. Anyone with a desire to improve their English can benefit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎓", title: "Students", desc: "School & college students preparing for exams and higher education" },
              { emoji: "💼", title: "Professionals", desc: "Employees looking to enhance workplace communication and career prospects" },
              { emoji: "🔍", title: "Job Seekers", desc: "Individuals preparing for job interviews and professional opportunities" },
              { emoji: "🏠", title: "Homemakers", desc: "Those seeking personal development and social confidence" },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
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
