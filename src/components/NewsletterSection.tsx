import { useState } from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Follow our news
        </h2>
        <p className="text-muted-foreground mb-8">Subscribe to our newsletter now</p>
        <form
          className="flex items-center max-w-md mx-auto bg-card rounded-full overflow-hidden shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
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
