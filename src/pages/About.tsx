import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const stats = [
  { label: "Students Worldwide", value: "50,000+", icon: Users },
  { label: "Expert Tutors", value: "200+", icon: Award },
  { label: "Languages Offered", value: "12+", icon: Globe },
  { label: "Success Rate", value: "95%", icon: Target },
];

const team = [
  { name: "Sarah Johnson", role: "Founder & CEO", emoji: "👩‍💼" },
  { name: "Michael Chen", role: "Head of Education", emoji: "👨‍🏫" },
  { name: "Emma Williams", role: "Lead Instructor", emoji: "👩‍🎓" },
  { name: "David Park", role: "Technology Director", emoji: "👨‍💻" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're on a mission to make language learning accessible, engaging, and effective for everyone around the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At LEARN, we believe that language is the bridge that connects cultures, opens doors to opportunities, and enriches lives. Founded in 2018, we've grown from a small tutoring service into a global platform serving thousands of students.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines cutting-edge technology with proven teaching methods, ensuring every student receives a personalized and effective learning experience.
            </p>
          </div>
          <div className="bg-hero-bg rounded-2xl p-12 text-center">
            <span className="text-8xl">🌍</span>
            <p className="text-xl font-heading font-bold text-foreground mt-6">Connecting the world through language</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <stat.icon size={28} className="text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-background rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <span className="text-6xl block mb-4">{member.emoji}</span>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
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
