import { BookOpen, Users, Award, ShieldCheck } from "lucide-react";

const benefits = [
  { title: "Free eBooks", icon: BookOpen, description: "Access a library of language learning eBooks at no extra cost." },
  { title: "Personalized approach", icon: Users, description: "Tailored curriculum based on your learning style and goals." },
  { title: "Course certification", icon: Award, description: "Earn recognized certificates upon course completion." },
  { title: "Money-back policy", icon: ShieldCheck, description: "Full refund within 30 days if you're not satisfied." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center mb-2">
          language course benefits
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Simplified training for<br />maximum results
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-hero-bg flex items-center justify-center group-hover:bg-hero-gold transition-colors">
                <b.icon size={32} className="text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
