import heroPerson from "@/assets/hero-person.png";
import { Heart, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-0 flex flex-col md:flex-row items-center min-h-[600px]">
        {/* Left: Image with decorative shapes */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          {/* Decorative teal blob */}
          <div className="absolute top-10 left-0 w-64 h-64 md:w-80 md:h-80 bg-section-dark rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-90 -z-0" />
          {/* Decorative teal ring */}
          <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 border-[6px] border-hero-teal rounded-full -z-0" />
          {/* Gold circle */}
          <div className="absolute top-20 right-20 w-12 h-12 bg-hero-gold rounded-full" />
          {/* Purple star */}
          <div className="absolute top-8 left-16 w-12 h-12 bg-hero-purple rounded-full flex items-center justify-center">
            <Star className="text-card" size={20} fill="currentColor" />
          </div>

          <img
            src={heroPerson}
            alt="Student pointing"
            width={800}
            height={900}
            className="relative z-10 max-h-[500px] object-contain"
          />

          {/* Floating testimonial card */}
          <div className="absolute bottom-16 left-4 md:left-8 z-20 bg-card rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <Heart className="text-destructive" size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Love this course!</p>
              <p className="text-xs text-muted-foreground">Absolutely brilliant experience</p>
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Learn a<br />
            <span className="text-foreground">new language</span>
          </h1>
          <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
            Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
          </p>
          <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
            Nec odio praesent libero sed cursus dapibus diam sed nisi nulla quis sem.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-sm"
          >
            ENROLL NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
