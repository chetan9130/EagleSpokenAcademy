import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = ["HOME", "ABOUT US", "COURSES", "BLOG", "CONTACT"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-card py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🌍</span>
        <span className="font-heading text-xl font-bold tracking-[0.25em] text-foreground">LEARN</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium tracking-widest text-foreground hover:text-muted-foreground transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="text-foreground hover:text-muted-foreground transition-colors">
          <Search size={18} />
        </button>
      </div>

      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-card shadow-lg md:hidden flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-6 py-3 text-sm font-medium tracking-widest text-foreground hover:bg-muted transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
