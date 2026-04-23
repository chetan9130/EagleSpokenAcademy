import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, TrendingUp, MessageSquare, Clock, Users, Star, Award, CheckCircle } from "lucide-react";

const courses = [
  {
    title: "Basic Level",
    icon: BookOpen,
    level: "For Beginners",
   
    description: "Start your English journey with foundational grammar, basic vocabulary, simple conversations, and pronunciation basics.",
    features: ["Basic Grammar", "Vocabulary Building", "Pronunciation", "Simple Conversations"],
    popular: true,
  },
  {
    title: "Intermediate Level",
    icon: TrendingUp,
    level: "Some English Knowledge",
   
    description: "Refine your grammar, expand vocabulary, improve everyday conversations, and develop listening comprehension.",
    features: ["Grammar Refinement", "Expanded Vocabulary", "Listening Skills", "Everyday Conversations"],
  },
  {
    title: "Advanced Level",
    icon: MessageSquare,
    level: "Fluent Speakers",
   
    description: "Achieve mastery with fluency development, advanced communication, professional English, and presentation skills.",
    features: ["Fluency Development", "Professional English", "Presentation Skills", "Interview Prep"],
  },
];

const trainingFeatures = [
  
  "Online & Offline learning options",
  "Flexible morning, afternoon & evening batches",
  "Small groups of 8-12 students per batch",
  "Interactive lessons with practical exercises",
  "Regular assessments and progress tracking",
  "Mobile app for learning on-the-go",
  "Parent-teacher communication for young learners",
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Our Courses</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Training for all proficiency levels — from beginners to advanced speakers. Find the program suited to your goals.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.title} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow group relative">
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="bg-hero-bg p-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <course.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.level}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{course.description}</p>
                  <div className="space-y-2 mb-6">
                    {course.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle size={14} className="text-accent" />
                        {f}
                      </div>
                    ))}
                  </div>
                 
                  <a
                    href="https://wa.me/919765699626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Training Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trainingFeatures.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      {/* <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <Award size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Official Certification</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Upon successful completion, receive an official certificate from Eagle Spoken English Academy. Each certificate includes your proficiency level, a unique verification ID, and is available in both digital and physical formats — valuable for your career and personal development.
          </p>
          <a
            href="https://wa.me/919765699626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Enroll & Get Certified
          </a>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Courses;
