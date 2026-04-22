import { BookOpen, Users, Award, ShieldCheck } from "lucide-react";

const benefits = [
 
  { title: "Small Batch Sizes", icon: Users, description: "Personalized attention with only 8-12 students per batch for maximum interaction and learning." },
  { title: "Flexible Timings", icon: BookOpen, description: "Choose from morning, afternoon, or evening batches — online or offline to fit your schedule." },
  { title: "Practical Focus", icon: ShieldCheck, description: "Real-world communication skills through interactive lessons, role plays, and group discussions." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center mb-2">
          why choose eagle academy
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Training designed for<br />maximum results
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-hero-bg flex items-center justify-center group-hover:bg-accent transition-colors">
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
