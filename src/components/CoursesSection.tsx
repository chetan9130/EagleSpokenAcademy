import { Crown, BookOpen, GraduationCap, Languages } from "lucide-react";

const courses = [
  { title: "English language", icon: Crown, description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", popular: true },
  { title: "Spanish language", icon: BookOpen, description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  { title: "German language", icon: GraduationCap, description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  { title: "French language", icon: Languages, description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Most Popular<br />Language Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-xl transition-shadow group relative"
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hero-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hero-bg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <course.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
