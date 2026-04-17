import { BookOpen, TrendingUp, MessageSquare } from "lucide-react";

const courses = [
  {
    title: "Basic Level",
    icon: BookOpen,
    description:
      "Foundational grammar, basic vocabulary, simple conversations, and pronunciation basics for beginners.",
    popular: true,
  },
  {
    title: "Intermediate Level",
    icon: TrendingUp,
    description:
      "Grammar refinement, expanded vocabulary, everyday conversations, and listening comprehension.",
  },
  {
    title: "Advanced Level",
    icon: MessageSquare,
    description:
      "Fluency development, advanced communication, professional English, and presentation skills.",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center mb-2">
          our programs
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-10">
          Course Levels for<br />Every Learner
        </h2>

        {/* 🎥 Video Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-auto"
             // poster="/thumbnail.jpg" // optional thumbnail
            >
              <source src="/public/tesi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-center text-muted-foreground mt-4 text-sm">
            Watch how our courses help you improve your English skills
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-xl transition-shadow group relative"
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hero-bg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <course.icon size={28} />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                {course.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;