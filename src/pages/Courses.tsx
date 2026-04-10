import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Crown, BookOpen, GraduationCap, Languages, Clock, Users, Star } from "lucide-react";

const courses = [
  { title: "English Language", icon: Crown, level: "Beginner to Advanced", duration: "12 Weeks", students: "12,500+", rating: 4.9, description: "Master the global language of business, travel, and communication with our comprehensive English program.", popular: true },
  { title: "Spanish Language", icon: BookOpen, level: "Beginner to Advanced", duration: "10 Weeks", students: "8,200+", rating: 4.8, description: "Dive into one of the world's most spoken languages with immersive lessons and native-speaker practice." },
  { title: "German Language", icon: GraduationCap, level: "Beginner to Intermediate", duration: "14 Weeks", students: "5,100+", rating: 4.7, description: "Open doors to Europe's largest economy with structured German language courses." },
  { title: "French Language", icon: Languages, level: "Beginner to Advanced", duration: "10 Weeks", students: "9,800+", rating: 4.9, description: "Learn the language of love, diplomacy, and cuisine with expert French instructors." },
  { title: "Japanese Language", icon: BookOpen, level: "Beginner to Intermediate", duration: "16 Weeks", students: "3,400+", rating: 4.8, description: "Explore Japanese culture through language, from hiragana to conversational fluency." },
  { title: "Mandarin Chinese", icon: GraduationCap, level: "Beginner", duration: "16 Weeks", students: "4,600+", rating: 4.7, description: "Learn the most spoken language in the world with our step-by-step Mandarin program." },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Our Courses</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Choose from our wide range of language courses designed for every level and learning style.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {course.students}</span>
                    <span className="flex items-center gap-1"><Star size={14} className="text-accent" /> {course.rating}</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
