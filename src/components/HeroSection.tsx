import heroPerson from "@/assets/hero-person.png";
import { Award, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-0 flex flex-col md:flex-row items-center min-h-[600px]">
        {/* Left: Image with decorative shapes */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <div className="absolute top-10 left-0 w-64 h-64 md:w-80 md:h-80 bg-section-dark rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-90 -z-0" />
          <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 border-[6px] border-hero-teal rounded-full -z-0" />
          <div className="absolute top-20 right-20 w-12 h-12 bg-hero-gold rounded-full" />
          <div className="absolute top-8 left-16 w-12 h-12 bg-hero-purple rounded-full flex items-center justify-center">
            <Star className="text-card" size={20} fill="currentColor" />
          </div>

          <img
            src={heroPerson}
            alt="Eagle Spoken English Academy student"
            width={800}
            height={900}
            className="relative z-10 max-h-[500px] object-contain"
          />

          {/* Floating stats card */}
          <div className="absolute bottom-16 left-4 md:left-8 z-20 bg-card rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">50,000+ Students</p>
              <p className="text-xs text-muted-foreground">Trained successfully</p>
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-accent" />
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">4.8 ★ Rated Academy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Speak English<br />
            <span className="text-primary">with Confidence</span>
          </h1>
          <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
            Eagle Spoken English Academy empowers you with practical communication skills that transform your personal and professional life.
          </p>
          <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
            Certified programs · Flexible batches · Online & Offline classes
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918485038383"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-lg"
            >
              ENROLL NOW
            </a>
            <a
              href="https://wa.me/918485038383?text=I%20want%20to%20book%20a%20free%20demo%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary text-primary px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
            >
              FREE DEMO CLASS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
