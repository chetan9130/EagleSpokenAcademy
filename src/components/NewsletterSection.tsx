import { useState } from "react";
import { Send, Phone } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Start Your English Journey Today
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Join 50,000+ successful students. Contact us on WhatsApp or subscribe for English learning tips and updates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://wa.me/918485038383"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            <Phone size={18} /> WhatsApp: +91 8485038383
          </a>
        </div>
        <form
          className="flex items-center max-w-md mx-auto bg-card rounded-full overflow-hidden shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email for tips"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-4 hover:opacity-90 transition-opacity"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
