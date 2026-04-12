import { Users, Star, Award, Clock } from "lucide-react";

const stats = [
  { label: "Students Trained", value: "50,000+", icon: Users },
  { label: "Student Rating", value: "4.8/5", icon: Star },
  { label: "Certified Programs", value: "100%", icon: Award },
  { label: "Years of Experience", value: "15+", icon: Clock },
];

const TrustedSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <stat.icon size={24} className="text-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
